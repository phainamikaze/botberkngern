'use strict';
const WEBHOOK_TOKEN = process.env.WEBHOOK_TOKEN;
module.exports.handler = async (event, context) => {
  console.log(event);
  try {
      if(event.queryStringParameters['hub.verify_token']===WEBHOOK_TOKEN){
        return { 
            statusCode: 200, 
            body: event.queryStringParameters['hub.challenge']
        };
      }else{
        return { 
            statusCode: 200, 
            body: "Error, wrong token"
        };
      }
    
  } catch(error) {
    return {
      statusCode: 400,
      error: `Could not post: ${error.stack}`
    };
  }
};