require('dotenv').load();

const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds113870.mlab.com:13870/gql-ninja');

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, ()=>{
  console.log('now listening for requests on port 4000. e.g. localhost:4000/graphql?');
})
