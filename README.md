# ArTEZtic
Through a DAO, we want to create a self-sustained coalition of NFT artists to foster climate awareness and nudge climate action. 

## Summary
The Arteztic DAO will act as a decentralised autonomous NGO in service of environmental causes within the arts. We are a group of environmentally-minded NFT artists who have decided to work together to amplify the impact of our artworks, identify and adopt sustainable working practices, and onboard and support the wider community via a donation funding mechanism.

Fully community led, the DAO will decide collectively on the onboarding of new members, on the distribution of funds gathered from the sales of the NFTs donated by the members, the selection of a list of NGOs to support and the selection of members' projects to support.

The DAO will also have a public facing website presenting the group and its purpose, a permanent online gallery showcasing artworks from the members, temporary virtual exhibitions, the presentation of our members-led projects and an ongoing call for members.

For our MVP, we are focusing on onboarding new members through a governance mechanism (application + voting mechanism).

The next steps are as follows:
- Enable art donations in order to have a shared-pool of funds to be distributed between the artists, the members and a roster of selected NGO's
- Create a permanent autonomous online exhibition with the environmental NFT art donated
- Enable the production and support of projects developed directly by the DAO

*A note on our name: the word Arteztic can be written ArTEZtic for a clearer reference to the Tezos blockchain, on which our artistic project is being built. It also merges with the word Arctic, to reference the environmental nature of our mission, and of course the word Artistic.*

-------------

## Challenge
The proposed DAO will provide an environment of sustainable practice for artists concerned with the key issues of environmental impact, social impact and diversity, concerns that are not currently prioritised in either the traditional art world or the PoW NFT platforms. It will provide an alternative system of support for all artists, negating the old systems of exclusive schooling, opaque patronage, cronyism, and a collector focused economy.

## Vision
An independent coalition of NFT artists with a shared-goal: prioritising the environment in the creation of art. 

## Mission 
The idea of this coalition is to bring together ‘green’ NFT artists and use the power of community and collaboration to move away from the restrictive models of the conventional art market, and the analogous PoW NFT model.
An ideals-driven use of PoS blockchain technology in combination with a governance DAO will hopefully be able to introduce a new form of collective value creation without traditional intermediaries, and promote the decentralized distribution of further value for an expanding community.
This DAO will run on the Tezos Blockchain and be self-sustained thanks to the donations of art by artists - the funds generated from the sale of these artworks will be distributed in a way as to further the vision of the DAO and encourage and invite new members.

## Governance Mechanism

## Reputation Token

## DAO Stack

## Functionalities for a smart contract MVP
> Intro
For the Gitcoin Hackathon "Tezos Hackathon: NFT Me, You Can DAO It", we decided to create the MVP of a smart contract to welcome and review applications from new members,  supported by a solid white paper and a simple introduction webpage.
Indeed, we realized that our first step should be able to welcome members in the DAO, before even starting to accept donations, vote on the projects, on the roster of NGOs or even on the NFT we want to exhibit on our website. So, for this MVP we need to be able to introduce the DAO, accept new members applications and vote to approve or reject the application.

> Smart Contract Functionalities: 
- Create Application (via a simple application form with the minimum elements on chain and the rest on IPFS).
- Vote (Vote Against/For application)
- Add/Remove DAO Member (which will be used to accept Members based on votes and give them right to vote for the next proposal period )

> Contract deployed on Florence contains  entry points 
   * Add Administrator (which adds members into DAO taking certain Criteria into consideration based on votes on the POLL) 
   * Remove Administrator (which now can be used to remove a DAO member if a proposal ever comes to remove)(V2)
   * Create Poll 
      * Polls can have multiple options ranging from 1-7 
      * Poll data stored on Smart contract - 
         - PollID (IPFS CID as well as its the unique identifier for polls)
         - Metadata contains start_time, end_time (which would be automatically populated when creating the poll with the time gap of 30 Days and can be changed based on community             proposal)
      * Poll Data stored on IPFS -
         - Anything related to the proposal will be stored on IPFS and will be fetched dynamically on to the proposals page real-time.
         - Currently for applicants we store: website/twitter/instagram or NFT link of the applicant, short Bio

      * Polls contains 3 categories  1)Proposals, 2) Questions(V2), 3) Applications
   * Vote - vote entry point will take poll_id and poll_option and update the storage on smart contract
   * In addition to them, we have several mappings to make use of votes., and show statastics based on the data.

## Developers Tutorial
There are two parts of this repo,
1) Members Facing app - which lets you vote on a proposal/question/application
2) applicants app - which lets artists/devs create an application to be a member of DAO.
The contract we use for handling these operations on florence net : 
To run this application : Clone this repo., Create an .env file and enter valid details for the respective keys using .env.sample and the contract address present above. 
```
$ git clone https://github.com/diane7C8J/Arteztic_2
$ cd poll-taquito
# install dependencies
$ yarn install

# build for production and launch server
$ yarn build
$ npm start
```


## Authors
Contributors names and contact info

## Version History

* 0.1
    * Initial Release

## License
TBC 

## Acknowledgments
TBC
