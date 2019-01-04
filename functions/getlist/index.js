'use strict';
const AWS = require('aws-sdk');

const LIST_TABLE = process.env.LIST_TABLE;
const AWS_REGION = process.env.AWS_REGION;
const docClient = new AWS.DynamoDB.DocumentClient({region: AWS_REGION});
module.exports.handler = async (event, context) => {
  //const body = JSON.parse(event.body);
  const listid = event.pathParameters.id;
  const [owner,createtime] = listid.split("_");
  const params = {
    TableName: LIST_TABLE,
    Key: {
      owner: owner,
      createtime: createtime
    },
  };
  console.log(params);
  try {
    const data = await docClient.get(params).promise();
    return { 
      statusCode: 200, 
      headers: {
        "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS
      },
      body: JSON.stringify({ list:data.Item }) };
  } catch(error) {
    return {
      statusCode: 400,
      error: `Could not post: ${error.stack}`
    };
  }
};