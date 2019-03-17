# mt-node-graphql-sample

This is a sample application to demonstrate how to use graphql with MS SQL and any external API.

## Technologies
- NodeJS
- GraphQL
- Express
- MS SQL
- React

## Set Up

Clone the repository and open the cloned repository in terninal/command prompt and install the dependencies

    `npm i`

The application have two parts to it.
- Node application containing the graphql layer
- React application demonstrating the usage on front end

Open another terminal and run the graphql script to start the node server

    `npm run graphql`


To start the react application run the start script

    `npm start`


Your applications will be accessible on below links:

- **React Application:** 
[http://localhost:3000/](http://localhost:3000/)
- **GraphQL Playground:** [http://localhost:4000/graphql](http://localhost:4000/graphql)

The User and Candidate components in the application show how common graphql endpoint can be used by just modifying the GQL query sent to server.

You can use the GraphQl playground to play around with the existing schema.

Happy Coding!!