// src/handlers/cosmos.js

'use strict';

module.exports.write = async function (context, req) {
  context.log('JavaScript HTTP trigger function processed a request.');

  const { uri } = require('../../vars.js');
  const { MongoClient, ServerApiVersion } = require('mongodb');
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

  const input = req.body;

  await client.connect();
  const collection = client.db("test").collection("devices");

  await collection.insertOne({ name: input.name });

  // const result = await collection.find().toArray();

  client.close();

  context.res = {
      status: 201, /* Defaults to 200 */
      body: 'Post created!',
  };
  // res.status(201).send({
  //     result,
  // });

  context.log('Finish writing to CosmosDB');
};
