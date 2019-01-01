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

class Itemslist extends React.Component {
  componentDidMount() {
    console.log(this.props.match.params.listid)
    const { dispatch } = this.props;
    dispatch(menuActions.showMemu());
  }

  render() {
    let footpage;

    if(this.props.menu === 'FaAB'){
      footpage = (
        <FabMenu showAddnew={this.props.showAddnew}/>
      );
    }else if(this.props.menu === 'FAB'){
      footpage = (
        <Addnew/>
      );
    }
    return(
    <div>
      <section>
      <Panel>
      <section>
      
        <Items items={[]} /> 
      </section>
       </Panel>
       
      
       {footpage}
    </section>
    </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => ({
  items: state.list.items,
  menu: state.menu
})
const mapDispatchToProps = (dispatch,ownProps) => {
  return {
      getListitems: (listid,filter) => {
        dispatch(itemActions.getItems(listid,filter));
      },
      showAddnew: () => {
        dispatch(menuActions.showAddnew());
      },
      dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Itemslist);