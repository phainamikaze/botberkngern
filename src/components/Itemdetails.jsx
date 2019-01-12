import React from 'react';
import { 
    ButtonArea,
    Button,
    Preview,
    PreviewHeader,
    PreviewBody,
    PreviewItem,
} from 'react-weui';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import { 
    FaExclamationCircle,
    FaDollarSign,
    FaCheckCircle,
} from "react-icons/fa";
const Itemdetails  = ({data,viewer,onDelete,onConfirm,onPaid,listact})=>{
    let statusIcon,statusText;
    if(data.status==="NEW"){
        statusIcon = <FaExclamationCircle style={{color: '#0083FF' ,marginRight: '5px'}}/>;
        if(viewer.owner===true && viewer.sharedWithMe===false){
            statusText = "เรียกเก็บเงิน";
        }else if(viewer.owner===false && viewer.sharedWithMe===true){
            statusText = "ค้างชำระ";
        }   
    }else if(data.status==="PAID"){
        statusIcon = <FaDollarSign style={{color: '#FFA500' ,marginRight: '5px'}}/>;
        statusText = "ชำระแล้ว";
    }else if(data.status==="CONFIRM"){
        statusIcon = <FaCheckCircle style={{color: '#1AAD19' ,marginRight: '5px'}}/>;
        statusText = "ยืนยัน";
    }
    const headlabal = (
        <div>
             สถานะ : {statusIcon} {statusText}
        </div>
    )

    let bottonArea,delBotton,confirmBotton,paidBotton;
    if(viewer.owner===false && viewer.sharedWithMe===false){
        bottonArea = (
            <ButtonArea direction="horizontal"></ButtonArea>
        );
    }else if(viewer.owner===true && viewer.sharedWithMe===false){
        if(data.status==="NEW"){
            delBotton = <Button type="warn" onClick={()=>{onDelete(data.ownlist,data.createtime)}}>ลบ</Button>
        }else{
            delBotton = <Button type="warn" disabled>ลบ</Button>
        }
        if(data.status==="PAID"){
            confirmBotton = <Button type="primary" onClick={()=>{onConfirm(data.ownlist,data.createtime,viewer.id)}}>ยืนยัน</Button>
        }else{
            confirmBotton = <Button type="primary" disabled>ยืนยัน</Button>
        }
        bottonArea = (
            <ButtonArea direction="horizontal">
            {delBotton}
            {confirmBotton}
            </ButtonArea>
        );
    }else if(viewer.owner===false && viewer.sharedWithMe===true){
        if(data.status==="NEW"){
            paidBotton = <Button type="primary" onClick={()=>{onPaid(data.ownlist,data.createtime,viewer.id)}}>ชำระแล้ว</Button>
        }else{
            paidBotton = <Button type="primary" disabled>ชำระแล้ว</Button>
        }
        bottonArea = (
            <ButtonArea direction="horizontal">
            {paidBotton}
            </ButtonArea>
        );
    }
    TimeAgo.addLocale(en);
    const timeAgo = new TimeAgo('en-US');
    const listactshow = listact.map((actitem)=>{
        const flabal = actitem.user+" "+actitem.msg;
        return (
            <PreviewItem label={flabal} value={timeAgo.format(new Date(Number(actitem.acttime)))} />
        );
    })
    return (
        <div id="itemdetails">
        <Preview>
            <PreviewHeader>
                <PreviewItem label={data.details} value={"฿"+data.amount} />
            </PreviewHeader>
            <PreviewBody>
                <PreviewItem label={headlabal} value={ "เพิ่มเมื่อ "+(new Date(Number(data.createtime))).toLocaleString() } />

                {listactshow}
            </PreviewBody>
            {bottonArea}
        </Preview>
        </div>
    )
};
export default Itemdetails