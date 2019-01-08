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
const Itemdetails  = ({data,viewer,onDelete,onConfirm})=>{
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

    return (
        <div id="itemdetails">
        <Preview>
            <PreviewHeader>
                <PreviewItem label={data.details} value={"฿"+data.amount} />
            </PreviewHeader>
            <PreviewBody>
                <PreviewItem label={headlabal} value={ "เพิ่มเมื่อ "+(new Date(Number(data.createtime))).toLocaleString() } />
                <PreviewItem label="Description" value="Product Description" />
                <PreviewItem label="Description" value="Product Description" />
                <PreviewItem label="Description" value="Product Description" />
                <PreviewItem label="Details" value="Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. " />
            </PreviewBody>
            <ButtonArea direction="horizontal">
                <Button type="warn" disabled={!viewer.owner}  onClick={()=>{onDelete(data.ownlist,data.createtime)}}>ลบ</Button>
                <Button type="primary" disabled={!viewer.sharedWithMe}  onClick={()=>{onConfirm(data.ownlist,data.createtime)}}>ยืนยันว่าได้รับแล้ว</Button>
            </ButtonArea>
        </Preview>
        </div>
    )
};
export default Itemdetails