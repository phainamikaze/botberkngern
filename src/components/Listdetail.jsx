import React from 'react';
import { 
    ButtonArea,
    Button,
    Preview,
    PreviewHeader,
    PreviewBody,
    PreviewItem,
} from 'react-weui';
import { 
    FaExclamationCircle,
    FaDollarSign,
    FaCheckCircle,
} from "react-icons/fa";
import Invite from './Invite';
const Listdetail  = ({data,viewer})=>{

    let statusText,captionText,headText,headAmount;
    if(viewer.owner===true && viewer.sharedWithMe===false){
        statusText = "เรียกเก็บเงิน";
        captionText = "กดปุ่ม 'ยืนยันทั้งหมด' เพื่อยืนยันยอดที่ 'ชำระแล้ว' ทั้งหมด";
        headText = "ชำระแล้ว "+"x"+" รายการ รวมทั้งหมด";
        headAmount = "฿"+data.paid;
    }else if(viewer.owner===false && viewer.sharedWithMe===true){
        statusText = "ค้างชำระ";
        captionText = "กดปุ่ม 'ชำระแล้วทั้งหมด' เพื่อชำระยอดที่ 'ค้างชำระ' ทั้งหมด";
        headText = "ค้างชำระ "+"x"+" รายการ รวมทั้งหมด";
        headAmount = "฿"+data.newval;
    }else{
        statusText = "มาใหม่";
        captionText= "";
    }
    const statusIcon1 = <FaExclamationCircle style={{color: '#0083FF' ,marginRight: '5px'}}/>;
    const statusIcon2 = <FaDollarSign style={{color: '#FFA500' ,marginRight: '5px'}}/>;
    const statusIcon3 = <FaCheckCircle style={{color: '#1AAD19' ,marginRight: '5px'}}/>;
    const statusText1 = (
        <div>
            {statusIcon1} {statusText}
        </div>
    );
    const statusText2 = (
        <div>
            {statusIcon2} ชำระแล้ว
        </div>
    );
    const statusText3 = (
        <div>
            {statusIcon3} ยืนยัน
        </div>
    );


    let bottonArea,delBotton,confirmBotton,paidBotton;
    if(viewer.owner===false && viewer.sharedWithMe===false){
        bottonArea = (
            <ButtonArea direction="horizontal"></ButtonArea>
        );
    }else if(viewer.owner===true && viewer.sharedWithMe===false){
        delBotton = <Button type="warn" onClick={()=>{}}>ลบรายการนี้</Button>

        if(!data.sharedwith){
            confirmBotton = (<Invite 
                list={data}
            />);
        }else if(data.paid!==0){
            confirmBotton = <Button type="primary" onClick={()=>{}} >ยืนยันทั้งหมด</Button>
        }else{
            confirmBotton = <Button type="primary" disabled>ยืนยันทั้งหมด</Button>
        }
        bottonArea = (
            <ButtonArea direction="horizontal">
            {delBotton}
            {confirmBotton}
            </ButtonArea>
        );
    }else if(viewer.owner===false && viewer.sharedWithMe===true){
        if(data.newval!==0){
            paidBotton = <Button type="primary" onClick={()=>{}}>ชำระแล้วทั้งหมด</Button>
        }else{
            paidBotton = <Button type="primary" disabled>ชำระแล้วทั้งหมด</Button>
        }
        bottonArea = (
            <ButtonArea direction="horizontal">
            {paidBotton}
            </ButtonArea>
        );
    }
    return (
        <div id="listdetails">
        <Preview>
            <PreviewHeader>
                <PreviewItem label={headText} value={headAmount} />
            </PreviewHeader>
            <PreviewBody>
                <PreviewItem label={data.title}  value={ "สร้างเมื่อ "+(new Date(Number(data.createtime))).toLocaleString() } />
                <PreviewItem label={statusText1} value={ data.newval+" บาท" } />
                <PreviewItem label={statusText2} value={ data.paid+" บาท" } />
                <PreviewItem label={statusText3} value={ data.confirm+" บาท" } />
                <PreviewItem label={captionText} />
            </PreviewBody>
            {bottonArea}
        </Preview>
        </div>
    )
};
export default Listdetail