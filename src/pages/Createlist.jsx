import React from 'react';
import Formlist from '../components/Formlist';
import { listActions } from '../actions/listActions';
import { withRouter } from 'react-router-dom';
import {connect} from "react-redux";

class Createlist extends React.Component {
    savenewlist=(event) => {
        event.preventDefault();
        event.stopPropagation();
        //const data = new FormData(event.target);
        console.log(event.target[0].value);
        this.props.dispatch(listActions.createlist(this.props.history));
      };
    render(){
        return(
            <Formlist onSubmit={this.props.onSubmit}/>
        );
    }

}
const mapStateToProps = (state, ownProps) => ({
    active: true
})
const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        onSubmit: (event) => {
            event.preventDefault();
            event.stopPropagation();
            console.log(event.target[0].value);
            console.log(event.target[0].value);
            dispatch(listActions.createlist(ownProps.history));
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Createlist));