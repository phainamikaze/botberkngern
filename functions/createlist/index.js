'use strict';
const AWS = require('aws-sdk');

const LIST_TABLE = process.env.LIST_TABLE;
const AWS_REGION = process.env.AWS_REGION;
const docClient = new AWS.DynamoDB.DocumentClient({region: AWS_REGION});
module.exports.handler = async (event, context) => {
  const body = JSON.parse(event.body);
  const params = {
    TableName: LIST_TABLE,
    Item: {
      owner: body.owner,
      list_id: Date.now(),
      title: body.title? body.title:'no name'
    },
  };
  try {
    const data = await docClient.put(params).promise();
    return { statusCode: 200, body: JSON.stringify({ params, data }) };
  } catch(error) {
    return {
      statusCode: 400,
      error: `Could not post: ${error.stack}`
    };
  }
};