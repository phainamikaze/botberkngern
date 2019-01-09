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
const Itemdetails  = ({data,viewer,onDelete,onConfirm,onPaid})=>{
    let statusIcon,statusText;
    if(data.status==="NEW"){
        statusIcon = <FaExclamationCircle style={{color: '#0083FF' ,marginRight: '5px'}}/>;
        statusText = "มาใหม่";
    }else if(data.status==="PAID"){
        statusIcon = <FaDollarSign style={{color: '#FFA500' ,marginRight: '5px'}}/>;
        statusText = "จ่ายแล้ว";
    }else if(data.status==="CONFIRM"){
        statusIcon = <FaCheckCircle style={{color: '#1AAD19' ,marginRight: '5px'}}/>;
        statusText = "ยืนยันว่าได้รับแล้ว";
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
            confirmBotton = <Button type="primary" onClick={()=>{onConfirm(data.ownlist,data.createtime,viewer.id)}}>ยืนยันว่าได้รับแล้ว</Button>
        }else{
            confirmBotton = <Button type="primary" disabled>ยืนยันว่าได้รับแล้ว</Button>
        }
        bottonArea = (
            <ButtonArea direction="horizontal">
            {delBotton}
            {confirmBotton}
            </ButtonArea>
        );
    }else if(viewer.owner===false && viewer.sharedWithMe===true){
        if(data.status==="NEW"){
            paidBotton = <Button type="primary" onClick={()=>{onPaid(data.ownlist,data.createtime,viewer.id)}}>จ่ายแล้ว</Button>
        }else{
            paidBotton = <Button type="primary" disabled>จ่ายแล้ว</Button>
        }
        bottonArea = (
            <ButtonArea direction="horizontal">
            {paidBotton}
            </ButtonArea>
        );
    }
    TimeAgo.addLocale(en);
    const timeAgo = new TimeAgo('en-US');
    const listact = data.act.map((actitem)=>{
        let flabal = actitem.user+" "+actitem.msg;
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

                {listact}
            </PreviewBody>
            {bottonArea}
        </Preview>
        </div>
    )
};
export default Itemdetails