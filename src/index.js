import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Oops from './components/Oops';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

import 'weui';
import 'react-weui/build/packages/react-weui.css';

window.attachApp = () => {
  let appRender;
  if (true) {
    appRender = (
      <BrowserRouter>
        <App />
      </BrowserRouter>
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
