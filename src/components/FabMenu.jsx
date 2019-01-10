import React from 'react';
import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.min.css';
import { 
    FaInfo,
    FaPlus,
    FaPencilAlt,
    FaExclamationCircle,
    FaDollarSign,
    FaCheckCircle,
    FaRegListAlt
} from "react-icons/fa";

const FabMenu = (props) => {
    let btname;
    if(props.viewer.owner===true && props.viewer.sharedWithMe===false){
        btname = "เรียกเก็บเงิน";
    }else if (props.viewer.owner===false && props.viewer.sharedWithMe===true){
        btname = "ค้างชำระ";
    }else{
        btname = "มาใหม่";
    }
    const addbutton = (
        <Action style={{backgroundColor: '#ffffff',color: '#34495e'}}
                text="เพิ่ม"
                onClick={()=>{props.show("ADDNEW")}}>
                <FaPlus />
        </Action>
    );
    const detailsbutton = (
        <Action style={{backgroundColor: '#ffffff',color: '#34495e'}}
            text="จัดการ"
            onClick={()=>{props.show("LISTDETAIL",props.listid)}}>
            <FaInfo />
        </Action>
    );
    const allbutton = (
        <Action style={{backgroundColor: '#ffffff',color: '#34495e'}}
                text="แสดงทั้งหมด"
                onClick={()=>{props.filterItems(props.listid,"ALL")}}>
                <FaRegListAlt />
        </Action>
    );
    const cbutton = (
        <Action style={{backgroundColor: '#ffffff',color: '#1AAD19'}}
                text="ยืนยัน"
                onClick={()=>{props.filterItems(props.listid,"CONFIRM")}}>
                <FaCheckCircle />
            </Action>
    );
    const pbutton = (
        <Action style={{backgroundColor: '#ffffff',color: '#FFA500'}}
                text="ชำระแล้ว"
                onClick={()=>{props.filterItems(props.listid,"PAID")}}>
                <FaDollarSign />
            </Action>
    );
    const nbutton = (
        <Action style={{backgroundColor: '#ffffff',color: '#0083FF'}}
                text={btname}
                onClick={()=>{props.filterItems(props.listid,"NEW")}}>
                <FaExclamationCircle />
            </Action>
    );
    let myfab
    if(props.viewer.owner===true){
        myfab = (
            <Fab
            mainButtonStyles={{backgroundColor: '#1AAD19',color: '#ffffff'}}
            icon={<FaPencilAlt/>}
            event="click">
            {addbutton}
            {detailsbutton}
            {allbutton}
            {cbutton}
            {pbutton}
            {nbutton}
            </Fab>
        );
    }else{
        myfab = (
            <Fab
            mainButtonStyles={{backgroundColor: '#1AAD19',color: '#ffffff'}}
            icon={<FaPencilAlt/>}
            event="click">
            {detailsbutton}
            {allbutton}
            {cbutton}
            {pbutton}
            {nbutton}
            </Fab>
        );
    }
  return (
    <div id="fab">
        {myfab}
    </div>
  );
};

export default FabMenu;