// src/handlers/cosmos.js

'use strict';
const uuidv4 = require('uuid/v4');

module.exports.write = async function (context, req) {
  context.log('JavaScript HTTP trigger function processed a request.');

  const input = req.body;

  const timestamp = Date.now();
  const uuid = uuidv4(); //

  if (req.body?.name) {

      const output = JSON.stringify({
        id: uuid,
        name: input.name,
        employeeId: input.employeeId,
        address: input.address,
        timestamp: timestamp,
      });

      context.bindings.record = output;
      context.res = {
            status: 201,
            headers: {
              Location: "/api/v1/tasks"
            },
            body: output
      };
  }

  context.log('Finish writing to CosmosDB');
};
