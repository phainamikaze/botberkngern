import React from 'react';
import Formlist from '../components/Formlist';
import listActions from '../actions/listActions';
import { withRouter } from 'react-router-dom';
import {connect} from "react-redux";

class Createlist extends React.Component {
    componentDidMount(){
        console.log(this.props)
    }

    savenewlist=(event) => {
        event.preventDefault();
        event.stopPropagation();
        //const data = new FormData(event.target);
        console.log(event.target[0].value);
        this.props.dispatch(listActions.createlist(
            this.props.viewerId,
            event.target[0].value,
            this.props.history));
      };
    render(){
        return(
            <Formlist onSubmit={this.savenewlist} loader={this.props.loader} />
        );
    }

}
const mapStateToProps = (state, ownProps) => ({
    loader: state.loader
})

export default withRouter(connect(mapStateToProps)(Createlist));