import React from 'react';
const Notfound = () => {
  return (
    <div id='oops'>
      <div id='oops-body'>
        <h1>Page Not Found</h1>

        <div id='oops-subtitle'>
          <p>It looks like you're viewing this list outside of the Messenger app. This experience has been designed to work within the app on iOS or Android.</p>
          <br />
          <p>Head over to the Messenger app on your mobile device for a better experience.</p>
        </div>
      </div>
    </div>
  );
};

export default Notfound;