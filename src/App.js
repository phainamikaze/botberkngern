import React from 'react';
import { Route } from 'react-router-dom';
import Oops from './components/Oops';

import Createlist from './containers/Createlist';
import Itemslist from './containers/Itemslist';
import { BrowserRouter } from 'react-router-dom';
import './style.css';
const App = (props) => (
  <BrowserRouter>
    <div>
      <Route path="/" exact component={Oops} />
      <Route path="/createlist" render={() => <Createlist {...props} />} />
      <Route path="/itemslist/:listid" component={Itemslist} />
    </div>
  </BrowserRouter>
);

export default App;