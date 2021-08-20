const queryBadgeCheck = `query BadgeCheck($wallet: String = "") {
    hic_et_nunc_token(where: {id: {_eq: "93229"}}) {
      metadata
      title
      token_holders(where: {quantity: {_gt: "0"}, holder_id: {_eq: $wallet}}) {
        quantity
      }
    }
  }`;

async function fetchGraphQL(operationsDoc: string, operationName: string, variables: object) {
    const result = await fetch(
        "https://api.hicdex.com/v1/graphql", {
            method: "POST",
            body: JSON.stringify({
                query: operationsDoc,
                variables: variables,
                operationName: operationName
            })
        }
    );
    console.log(result);

    return await result.json();
}

export async function checkBadge(wallet: string) {
    const {
        errors,
        data
    } = await fetchGraphQL(queryBadgeCheck, "BadgeCheck", {
        "wallet": wallet
    });
    if (errors) {
        console.error(errors);
    }
    const result = data.hic_et_nunc_token[0].token_holders.length > 0;
    return result
}