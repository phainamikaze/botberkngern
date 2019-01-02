import React from 'react';
import {connect} from "react-redux";
import Items from '../components/Items'
import FabMenu from '../components/FabMenu';
import {
  Panel
} from 'react-weui';
import itemActions from '../actions/itemActions';
import menuActions from '../actions/menuActions';
import Addnew from '../components/Addnew';
import Listdetail from '../components/Listdetail';

class Itemslist extends React.Component {
  componentDidMount() {
    console.log(this.props.match.params.listid)
    const { dispatch } = this.props;
    dispatch(menuActions.show("FAB"));
    dispatch(itemActions.getItems(this.props.match.params.listid,"NEW"));
  }

  render() {
    let footpage;

    if(this.props.menu === 'FAB'){
      footpage = (
        <FabMenu show={this.props.show}/>
      );
    }else if(this.props.menu === 'ADDNEW'){
      footpage = (
        <Addnew show={this.props.show}/>
      );
    }else if(this.props.menu === 'DETAIL'){
      footpage = (
        <Listdetail show={this.props.show}/>
      );
    }
    return(
    <div id="itemslist">
      <section>
      <Panel>
        <section>
          <Items items={this.props.items} /> 
        </section>
      </Panel>
      {footpage}
    </section>
    </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => ({
  items: state.items.items,
  filter:state.items.filter,
  menu: state.menu
})
const mapDispatchToProps = (dispatch,ownProps) => {
  return {
      getListitems: (listid,filter) => {
        dispatch(itemActions.getItems(listid,filter));
      },
      show: (params) => {
        dispatch(menuActions.show(params));
      },
      dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Itemslist);