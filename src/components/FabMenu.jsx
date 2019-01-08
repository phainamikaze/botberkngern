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

const FabMenu = (porps) => {
  return (
    <div id="fab">
        <Fab
            mainButtonStyles={{backgroundColor: '#1AAD19',color: '#ffffff'}}
            icon={<FaPencilAlt/>}
            event="click">
            <Action style={{backgroundColor: '#ffffff',color: '#34495e'}}
                text="เพิ่ม"
                onClick={()=>{porps.show("ADDNEW")}}>
                <FaPlus />
            </Action>
            <Action style={{backgroundColor: '#ffffff',color: '#34495e'}}
                text="รายละเอียด"
                onClick={()=>{porps.show("LISTDETAIL",porps.listid)}}>
                <FaInfo />
            </Action>
            <Action style={{backgroundColor: '#ffffff',color: '#34495e'}}
                text="แสดงทั้งหมด"
                onClick={()=>{porps.show("DETAIL")}}>
                <FaRegListAlt />
            </Action>
            <Action style={{backgroundColor: '#ffffff',color: '#1AAD19'}}
                text="ยืนยันว่าได้รับแล้ว"
                onClick={()=>{porps.show("DETAIL")}}>
                <FaCheckCircle />
            </Action>
            <Action style={{backgroundColor: '#ffffff',color: '#FFA500'}}
                text="จ่ายแล้ว"
                onClick={()=>{porps.show("DETAIL")}}>
                <FaDollarSign />
            </Action>
            <Action style={{backgroundColor: '#ffffff',color: '#0083FF'}}
                text="มาใหม่"
                onClick={()=>{porps.show("DETAIL")}}>
                <FaExclamationCircle />
            </Action>
        </Fab>
    </div>
  );
};

export default FabMenu;