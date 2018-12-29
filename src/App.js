import React from 'react';
import { Route } from 'react-router-dom';
import Oops from './components/Oops';
import Addnew from './components/Addnew';

import Createlist from './pages/Createlist';
import Itemslist from './pages/Itemslist';
import { BrowserRouter } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <div>
      <Route path="/" exact component={Addnew} />
      <Route path="/createlist" component={Createlist} />
      <Route path="/itemslist" component={Itemslist} />
    </div>
  </BrowserRouter>
);

export default App;