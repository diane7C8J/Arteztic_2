type poll_id = string
type title = string
type category = string
type poll_option = nat
type votes = ((address * poll_id), poll_option) big_map
type totals = (poll_option, nat) map
type super_admin = address
type administrator = (address, unit) map


type poll_metadata = {
    start_date : timestamp;
    end_date : timestamp;
    num_options : nat;
    title : title;
    category : category;
}

type poll = {
    metadata : poll_metadata;
    totals : totals;
}

let empty_totals_map : (poll_option, nat) map = Map.empty

let max_day : int = 86_400 * 30

type polls = (poll_id, poll) big_map
type applicants = (address, poll_id) big_map
let applicants : applicants = Big_map.empty
type storage = {
    polls : polls;
    applicants : applicants;
    votes : votes;
    super_admin : super_admin;
    administrator : administrator;
}

type return = (operation list) * storage


type create_poll_arg = {
    poll_id : poll_id;
    poll_metadata : poll_metadata;
}

type vote_arg = {
    poll_id : poll_id;
    vote : poll_option;
}

type add_remove_administrator_arg = address

let check_if_super_admin (super_admin : super_admin) : unit =
    if Tezos.sender <> super_admin then
        ( failwith "error_NOT_AN_SUPER_ADMIN" : unit )
    else
    unit

let check_if_administrator (administrator, super_admin : administrator*super_admin) : unit =
    if ((Map.mem Tezos.sender administrator) || (Tezos.sender = super_admin)) then
        unit
    else
    ( failwith "error_NOT_AN_ADMINISTRATOR" : unit )

let create_poll_internal (create_poll_arg, polls : create_poll_arg * polls) : polls =
    if Big_map.mem create_poll_arg.poll_id polls then
        ( failwith "error_POLL_ALREADY_EXIST" : polls )
    else if (create_poll_arg.poll_metadata.category = "3") then
    //Big_map.update (create_poll_arg.poll_id) (Some (Tezos.sender)) applicants in
        let custom_metadata: poll_metadata = {
            start_date = Tezos.now;
            end_date = Tezos.now + max_day;
            num_options = 2n;
            title = create_poll_arg.poll_metadata.title;
            category = create_poll_arg.poll_metadata.category;
        } in
        let poll = {metadata = custom_metadata; totals = empty_totals_map} in
        Big_map.update (create_poll_arg.poll_id) (Some (poll)) polls 
    else
    let poll = {metadata = create_poll_arg.poll_metadata; totals = empty_totals_map} in
    Big_map.update (create_poll_arg.poll_id) (Some (poll)) polls
    
let update_vote (vote_arg, votes : vote_arg * votes) : poll_option option * votes =
    Big_map.get_and_update ((Tezos.sender, vote_arg.poll_id)) (Some (vote_arg.vote)) votes

let get_poll (poll_id, polls : poll_id * polls) : poll =
    match ( Big_map.find_opt poll_id polls ) with
    | None -> ( failwith "error_NO_SUCH_POLL" : poll )
    | Some p -> p

let get_poll_id_by_app ( applicant, applicants : address * applicants) : poll_id =
    match ( Big_map.find_opt(applicant) applicants ) with
    | None -> ( failwith "error_NO_SUCH_APPLICANT" : poll_id )
    | Some p -> p

let update_votes_map (vote_arg, votes : vote_arg * votes) : votes =
    Big_map.update ((Tezos.sender, vote_arg.poll_id)) (Some (vote_arg.vote)) votes

let updated_apps_map (poll_id,applicants : poll_id * applicants) : applicants =
  Big_map.update
    (Tezos.sender) (Some (poll_id)) applicants

let check_if_poll_started (start_date : timestamp) : unit =
    if Tezos.now < start_date then
        ( failwith "error_POLL_HAS_NOT_STARTED" : unit )
    else unit

let check_if_poll_is_over (end_date : timestamp) : unit =
    if Tezos.now > end_date then
        ( failwith "error_POLL_IS_OVER" : unit )
    else unit

let check_if_vote_option_is_valid (vote, num_options : poll_option * poll_option) : unit =
    if vote > num_options then
        ( failwith "error_VOTE_OPTION_INVALID" : unit )
    else unit

let add_administrator_internal (new_admin, administrator : address * administrator) : administrator =
    Map.update (new_admin) (Some (unit)) administrator

let remove_administrator_internal (admin_to_remove, administrator : address * administrator) : administrator =
    Map.remove admin_to_remove administrator

let create_poll ( create_poll_arg, storage : create_poll_arg * storage ) : return =
    let polls = create_poll_internal (create_poll_arg, storage.polls) in
    let applicants = updated_apps_map(create_poll_arg.poll_id, storage.applicants) in
    let storage = {storage with polls = polls} in
    let storate_final = {storage with applicants = applicants} in
    (([] : operation list), storate_final)

let vote ( vote_arg, storage : vote_arg * storage ) : return =
    let poll = get_poll (vote_arg.poll_id, storage.polls) in
    let metadata = poll.metadata in
    let _ = check_if_poll_started metadata.start_date in
    let _ = check_if_poll_is_over metadata.end_date in
    let _ = check_if_vote_option_is_valid (vote_arg.vote, metadata.num_options) in
    let votes = update_votes_map (vote_arg, storage.votes) in
    let storage = {storage with votes = votes} in
    (([] : operation list), storage) 

let add_administrator ( add_remove_administrator_arg, storage : add_remove_administrator_arg * storage ) : return =
    let _ = check_if_administrator(storage.administrator,storage.super_admin) in
    let poll_id = get_poll_id_by_app (add_remove_administrator_arg, storage.applicants) in 
    let poll = get_poll (poll_id , storage.polls) in
    let metadata = poll.metadata in
    let _ = check_if_poll_started metadata.start_date in
    let _ = check_if_poll_is_over metadata.end_date in
    let administrator = add_administrator_internal (add_remove_administrator_arg, storage.administrator) in
    let storage = {storage with administrator = administrator} in
    (([] : operation list), storage) 

let remove_administrator ( add_remove_administrator_arg, storage : add_remove_administrator_arg * storage ) : return =
    let _ = check_if_administrator(storage.administrator,storage.super_admin) in
    let administrator = remove_administrator_internal (add_remove_administrator_arg, storage.administrator) in
    let storage = {storage with administrator = administrator} in  
    (([] : operation list), storage) 

 type parameter =
    | CreatePoll of create_poll_arg
    | Vote of vote_arg
    | AddAdministrator of add_remove_administrator_arg
    | RemoveAdministrator of add_remove_administrator_arg
      
let main (action, s : parameter * storage) : return = 
    (match action with
    | CreatePoll (create_poll_arg) -> create_poll (create_poll_arg, s)
    | Vote (vote_arg) -> vote (vote_arg, s)
    | AddAdministrator (add_remove_administrator_arg) -> add_administrator (add_remove_administrator_arg, s)
    | RemoveAdministrator (add_remove_administrator_arg) -> remove_administrator (add_remove_administrator_arg, s)
    )

let init_storage : storage = {
    polls = ( Big_map.empty : polls );
    applicants = ( Big_map.empty : applicants );
    votes = ( Big_map.empty : votes );
    super_admin = (Tezos.sender : address);
    administrator = ( Map.empty : administrator )
}
