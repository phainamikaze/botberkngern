import React from 'react';
import {
    Cells,
    CellsTitle
} from 'react-weui';
import Item from './Item';
const Items = ({items,filter,itemdetail,viewer}) => {
    let txt,txtShow;
   
        if(viewer.owner===true && viewer.sharedWithMe===false){
            txt = "รายการเรียกเก็บเงิน";
        }else if(viewer.owner===false && viewer.sharedWithMe===true){
            txt = "รายการค้างชำระ";
        }
        if(filter==="NEW"){
            txtShow = txt;
        }else if(filter==="PAID"){
            txtShow = "รายการที่ชำระแล้ว";
        }else if(filter==="CONFIRM"){
            txtShow = "รายการที่ยืนยันการชำระแล้ว";
        }else if(filter==="ALL"){
            txtShow = "รายการทั้งหมด";
        }else{
            console.log(items);
            txtShow = "aaaaaa";
        }
    
    return (
        <div>
        <CellsTitle>{txtShow}</CellsTitle>
        <Cells>
        {items.map(myitem => (
            <Item key={myitem.createtime} data={myitem} onClick={itemdetail}/>
        ))}
        </Cells>
        </div>
    );
};
export default Items;