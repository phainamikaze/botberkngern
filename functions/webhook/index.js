'use strict';
const helpers = require('messenger-api-helpers');
const receiveApi = helpers.receive;
module.exports.handler = (event, context ,callback) => {
  const body = JSON.parse(event.body);
  console.log(body);

    if (body.object === 'page') {
        let result = [];
        body.entry.forEach(function(pageEntry) {
            console.log(pageEntry);
            if (!pageEntry.messaging) {
                return;
            }else{
                pageEntry.messaging.forEach((messagingEvent) => {
                    console.log({messagingEvent});
                    if (messagingEvent.message) {
                        result.push(receiveApi.handleReceiveMessage(messagingEvent));
                    }
                    if (messagingEvent.postback) {
                        result.push(receiveApi.handleReceivePostback(messagingEvent));
                    }
                });
            }
        });
        Promise.all(result).then(()=>{
            callback(null,{
                statusCode: 200
            })
        })
    } else {
        callback(null,{
            statusCode: 404
        })
    }
};