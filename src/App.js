import React from 'react';
import { Route } from 'react-router-dom';
import Oops from './components/Oops';
import Addnew from './components/Addnew';

import Createlist from './containers/Createlist';
import { BrowserRouter } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <div>
      <Route path="/" exact component={Addnew} />
      <Route path="/createlist" component={Createlist} />
      <Route path="/about" component={Oops} />
    </div>
  </BrowserRouter>
);

export default App;
