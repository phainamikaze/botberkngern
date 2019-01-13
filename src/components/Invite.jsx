import React from 'react';
import {Button} from 'react-weui';
import messages from '../messenger-api-helpers/messages';
const apiUri = "https://d194k4oxn9lq63.cloudfront.net";
const Invite = ({
    list
  }) => {
    const shareList = () => {
      window.MessengerExtensions.beginShareFlow(
        function success(response) {
          if (response.is_sent) {
            window.MessengerExtensions.requestCloseBrowser(null, null);
          }
        }, function error(errorCode, errorMessage) {
          console.error({errorCode, errorMessage});
        },
        messages.shareListMessage(apiUri, 
            list.owner, 
            list.createtime, 
            list.title),
        'broadcast');
    };
  
    return (
        <Button type="primary" onClick={shareList}>
            แชร์ให้เพื่อน
        </Button>
    );
  };
  
  export default Invite;