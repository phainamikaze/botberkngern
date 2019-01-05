import React from 'react';
import {connect} from "react-redux";
import Items from '../components/Items'
import FabMenu from '../components/FabMenu';
import {
  Panel
} from 'react-weui';
import itemActions from '../actions/itemActions';
import menuActions from '../actions/menuActions';
import listActions from '../actions/listActions';
import Additem from '../components/Additem';
import Listdetail from '../components/Listdetail';
import Bmodal from '../components/Bmodal';
import Itemdetails from '../components/Itemdetails';
class Itemslist extends React.Component {
  componentDidMount() {
    
    const { dispatch } = this.props;
    //dispatch(menuActions.show("FAB"));
    dispatch(listActions.getlist(this.props.match.params.listid));
    //dispatch(itemActions.getItems(this.props.match.params.listid,"NEW"));
    console.log(this.props);
  }

  render() {
    let footpage;

    if(this.props.menu.status === 'FAB'){
      footpage = (
        <FabMenu show={this.props.show}/>
      );
    }else if(this.props.menu.status === 'ADDNEW'){
      footpage = (
        <Bmodal show={this.props.show}>
          <Additem onSubmit={this.props.additem}/>
        </Bmodal>
      );
    }else if(this.props.menu.status === 'ITEMDETAIL'){
      footpage = (
        <Bmodal show={this.props.show}>
          <Itemdetails data={this.props.menu.payload} 
            onDelete={this.props.deleteitem}
            onConfirm={this.props.confirmitem}
            onPaid={this.props.paiditem}
          />
        </Bmodal>
      );
    }else if(this.props.menu.status === 'LISTDETAIL'){
      // footpage = (
      //   <Listdetail show={this.props.show}/>
      // );
      footpage = <Bmodal />
    }
    return(
    <div id="itemslist">
      <section>
      <Panel>
        <section>
          <Items 
            items={this.props.items} 
            list={this.props.list} 
            itemdetail={this.props.itemdetail}
          /> 
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
  menu: state.menu,
  list:state.list,
  isOwn: true
})
const mapDispatchToProps = (dispatch,ownProps) => {
  return {
      getListitems: (listid,filter) => {
        dispatch(itemActions.getItems(listid,filter));
      },
      show: (params) => {
        dispatch(menuActions.show(params));
      },
      additem: (event)=>{
        event.preventDefault();
        event.stopPropagation();
        dispatch(itemActions.additem(
          ownProps.match.params.listid,
          event.target[0].value,
          event.target[1].value
        ));
      },
      itemdetail: (data)=>{
        dispatch(menuActions.show(
          "ITEMDETAIL",
          data
        ));
      },
      deleteitem: (listid,createtime)=>{
        dispatch(itemActions.deleteitem(
          listid,
          createtime
        ));
      },
      confirmitem: (listid,createtime)=>{
        dispatch(itemActions.confirmitem(
          listid,
          createtime
        ));
      },
      paiditem: (listid,createtime)=>{
        dispatch(itemActions.paiditem(
          listid,
          createtime
        ));
      },
      dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Itemslist);