import React from 'react';
import {connect} from "react-redux";
import { Route } from 'react-router-dom';
import Oops from './components/Oops';

import viewerActions from './actions/viewerActions';
import Createlist from './containers/Createlist';
import Itemslist from './containers/Itemslist';
import { BrowserRouter } from 'react-router-dom';
import './style.css';

class App extends React.Component{
  componentWillMount(){
    this.props.dispatch(viewerActions.setViewer(this.props.viewerId));
  }
  render(){
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Oops} />
          <Route path="/createlist" render={() => <Createlist {...this.props} />} />
          <Route path="/itemslist/:listid"  component={Itemslist} />
        </div>
      </BrowserRouter>
    );
  }
   
}
const mapStateToProps = (state) => ({
  notset: true
})
const mapDispatchToProps = (dispatch) => {
  return {
      dispatch
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);