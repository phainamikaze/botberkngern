import React from 'react';
import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.min.css';

const FabMenu = (porps) => {
  return (
    <div id="fab">
        <Fab
            icon='c'
            event="click">
            <Action
                text="เพิ่ม"
                onClick={()=>{porps.show("ADDNEW")}}
                >
                +
            </Action>
            <Action style={{
                backgroundColor: '#ffffff',
                color: '#34495e',
                }}
                text="รายละเอียด"
                onClick={()=>{porps.show("DETAIL")}}
                >aaa
                <i className="fa fa-help" />
            </Action>
        </Fab>
    </div>
  );
};

export default FabMenu;