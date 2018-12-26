import React from 'react';
import { Route } from 'react-router-dom';
import Oops from './components/Oops';
import Addnew from './components/Addnew';

const App = () => (
  <div>
    <Route path="/" exact component={Addnew} />
    <Route path="/about/" component={Oops} />
  </div>
);

export default App;
