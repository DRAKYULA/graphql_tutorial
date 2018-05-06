require('dotenv').load();

const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

const user = process.env.MLABUSER;
const pw   = process.env.MLABPW

mongoose.connect(`mongodb://${user}:${pw}@ds113870.mlab.com:13870/gql-ninja`);
mongoose.connection.once('open', () => {
  console.log('connected to db');
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, ()=>{
  console.log('now listening for requests on port 4000. e.g. localhost:4000/graphql?');
})
