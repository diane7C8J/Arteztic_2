# ArTEZtic
Through a DAO, we want to create a self-sustained coalition of NFT artists to foster climate awareness and nudge climate action.   
Webpage: http://www.arteztic.xyz/  
Smart contract deployed on Florence Testnet: 

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

## Goals
Our ambition serves personal, collective, and planetary goals: 
1. **Amplify the impact of purpose-driven NFT artists** by joining forces to foster climate awareness and climate action / lobbying for climate justice through art with collective initiatives (shared communication, collaborations, collective exhibitions, etc)
2. **Create a self-sustainable model for purpose-driven art production** / finding an alternative model to the traditional art industry by enabling genuine sustainability.
3. **Create the first online gallery of NFT art acting for the planet**
4. **Directly support purpose-driven NGOs** with sales of donated art and create a new culture of the arts supporting purpose-driven projects.

## Governance Mechanism
One token, many outcomes. Our reputation token ARTEZ allows members to: 
- stake for governance
- stake for online exhibition curation
- stake for membership access
- support a NGOs
- stake to start a new project

## Functionalities for a smart contract MVP
**Intro:**
For the Gitcoin Hackathon "Tezos Hackathon: NFT Me, You Can DAO It", we decided to create the MVP of a smart contract to welcome and review applications from new members,  supported by a solid white paper and a simple introduction webpage.
Indeed, we realized that our first step should be able to welcome members in the DAO, before even starting to accept donations, vote on the projects, on the roster of NGOs or even on the NFT we want to exhibit on our website. So, for this MVP we need to be able to introduce the DAO, accept new members applications and vote to approve or reject the application.

**Smart Contract Functionalities:**
- Create Application (via a simple application form with the minimum elements on chain and the rest on IPFS).
- Vote (Vote Against/For application)
- Add/Remove DAO Member (which will be used to accept Members based on votes and give them right to vote for the next proposal period )

**Contract deployed on Florence contains entry points**
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
The contract we use for handling these operations on florence net : [KT1C1jMMzVi9jP7JGKrkVbSNMZpBZ3dNCspB](https://better-call.dev/florencenet/KT1C1jMMzVi9jP7JGKrkVbSNMZpBZ3dNCspB/operations)

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
## Roadmap and next steps
### **V1 - the first step of a DAO is a solid and simple foundation**
For our first MVP, we wanted to focus on building the community of members first because, without members to vote, we can't decide on the next steps to take. 
So, to create the foundations of our DAO, we decided to work on: 
- a solid white paper
- an informative web page to present the DAO
- a governance mechanism to accept new members applications (simple smart contract)
- a roadmap with the next steps expressing the ambitions of the DAO

### **V2 - towards community**
The second step of our development process is the creation of a secure and efficient UI well binded to our current smart contract;
1. UI functionalities: 
    - Profile View (To view the Badge, TzProfile to verify the identity of the applicants, Number of votes voted, etc)
    - Create Poll (DAO members can create Poll with all the Required Fields)
    - View Past Polls, Questions
    - View a Poll with all the metadata, number of votes and the address of the DAO members who voted.
2. security audit of the front end
3. proper website welcoming with the call for members

### **V3 - towards a peers shared-pool of funds**
The second step of this DAO is about building polls to be shared among members:
- Accept NFT donations
- Updating smart contract to be compatible with even more Governance on proposals, questions, reputation token functionalities to be merged with activities done by DAO members.
- Splitting sales smart contract (adding collaborative aspect to the sales including multi signing for artists collaborating on a NFT, and multi beneficiaries)
- Adaptation of our Governance Mechanism to vote on a roster of NGOs
- Autonomous and decentralised Curation Mechanism to feed our permanent online exhibition / marketplace directly connected to hic et nunc through hicdex
- Automatized social media promotion covering the approved votes

### **V4 - amplifying our impact**
The third step is about creating projects together and amplifying the impact of each artists with the support of the DAO:
- Submit projects to be produced and supported by the DAO (temporary exhibition, physical exhibition, art activism campaign, participative artwork, and more to be invented)
- Adaptation of our Governance Mechanism to vote on project proposals
- Creation of a discussion platform to discuss and debate the projects (more likely to be Discourse)

## License
This project is free to be used as outlined in the MIT License. Refer to the file LICENSE for more details.
