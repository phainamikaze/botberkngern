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
import store from '../store';
import Viewer from '../components/Viewer';
import { withRouter } from 'react-router-dom';

class Itemslist extends React.Component {
  componentWillMount() {
    const { viewer } = store.getState();
    const { dispatch } = this.props;
    dispatch(listActions.getlist(
      this.props.match.params.listid,
      viewer.id
      ));
    dispatch(itemActions.getItems(this.props.match.params.listid,"NEW"));
    store.subscribe(()=>{
      const { list } = store.getState();
      if (list === false) {
        this.props.history.push("/notfound");
      }
    });

  }


  

  render() {
    let footpage;

    if(this.props.menu.status === 'FAB'){
      footpage = (
        <FabMenu show={this.props.show} 
        viewer={this.props.viewer}
        filterItems={this.props.filterItems}
        listid={this.props.match.params.listid}/>
      );
    }else if(this.props.menu.status === 'ADDNEW'){
      footpage = (
        <Bmodal show={this.props.show}>
          <Additem onSubmit={this.props.additem}
            viewer={this.props.viewer}
          />
        </Bmodal>
      );
    }else if(this.props.menu.status === 'ITEMDETAIL'){
      footpage = (
        <Bmodal show={this.props.show}>
          <Itemdetails data={this.props.menu.payload} 
            viewer={this.props.viewer}
            onDelete={this.props.deleteitem}
            onConfirm={this.props.confirmitem}
            onPaid={this.props.paiditem}
            convertId={this.props.convertId}
            listact={this.props.listact}
          />
        </Bmodal>
      );
    }else if(this.props.menu.status === 'LISTDETAIL'){
      footpage = (
        <Bmodal show={this.props.show}>
          <Listdetail data={this.props.list} 
            viewer={this.props.viewer}
            paidall={this.props.paidall}
            confirmall={this.props.confirmall}
            showDialog={this.props.menu.showDialog}
            showDialogfunc={this.props.showDialog}
            delList={this.props.delList}
          />
        </Bmodal>
      );
    }
    return(
    <div id="itemslist">
      <section>
      <Panel>
        <Viewer 
        viewer={this.props.viewer}
        list={this.props.list} 
        />
        <section>
          <Items 
            items={this.props.items} 
            filter={this.props.filter} 
            itemdetail={this.props.itemdetail}
            viewer={this.props.viewer}
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
  viewer: state.viewer,
  listact:state.listact
})
const mapDispatchToProps = (dispatch,ownProps) => {
  console.log(ownProps);
  return {
      getListitems: (listid,filter) => {
        dispatch(itemActions.getItems(listid,filter));
      },
      show: (params) => {
        dispatch(menuActions.show(params));
        dispatch(listActions.getlist(
          ownProps.match.params.listid
        ));
      },
      additem: (event)=>{
        event.preventDefault();
        event.stopPropagation();
        dispatch(itemActions.additem(
          ownProps.match.params.listid,
          event.target[0].value,
          event.target[1].value,
          event.target[2].value
        ));
      },
      itemdetail: (data)=>{
        dispatch(menuActions.show(
          "ITEMDETAIL",
          data
        ));
        dispatch(itemActions.convertId(data));
      },
      delList: (owner,createtime)=>{
        dispatch(listActions.delList(
          owner,
          createtime
        ));
      },
      deleteitem: (listid,createtime)=>{
        dispatch(itemActions.deleteitem(
          listid,
          createtime
        ));
      },
      confirmitem: (listid,createtime,viewer)=>{
        dispatch(itemActions.confirmitem(
          listid,
          createtime,
          viewer
        ));
      },
      paiditem: (listid,createtime,viewer)=>{
        dispatch(itemActions.paiditem(
          listid,
          createtime,
          viewer
        ));
      },
      filterItems: (listid,filter)=>{
        dispatch(itemActions.getItems(
          listid,
          filter
        ));
      },
      paidall: (listid,amount,viewer)=>{
        dispatch(itemActions.paidall(
          listid,
          amount,
          viewer
        ));
      },
      confirmall: (listid,amount,viewer)=>{
        dispatch(itemActions.confirmall(
          listid,
          amount,
          viewer
        ));
      },
      showDialog: (params)=>{
        dispatch(menuActions.showDialog(params));
      },
      dispatch
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Itemslist));