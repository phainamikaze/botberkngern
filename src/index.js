import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Oops from './components/Oops';
import {Provider} from 'react-redux';
import store from './store';
import * as serviceWorker from './serviceWorker';

import 'weui';
import 'react-weui/build/packages/react-weui.css';

window.attachApp = (viewerId, threadType) => {
  let appRender;
  if (viewerId) {
    appRender = (
      <Provider store={store}>
        <App 
          viewerId={viewerId}
          threadType={threadType}
        />
      </Provider>
    );
  } else {
    appRender = <Oops/>;
  }

  ReactDOM.render(appRender, document.getElementById('root'));
};


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
