const express = require("express");
const path = require("path");
const helmet = require("helmet");
const { ApolloServer } = require('apollo-server-express');
const { importSchema } = require("graphql-import");
const resolvers = require("./resolvers/Candidate/candidate-resolver.js");
const typeDefs = importSchema(path.join(path.resolve("./"), "/server/schema/Candidate/schema.graphql"));

const server = new ApolloServer({ typeDefs, resolvers, playground: false });
const app = express();

app.use(helmet());

server.applyMiddleware({ app });
 
app.listen({ port: 4000 }, () =>
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
);