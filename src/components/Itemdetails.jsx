import React from 'react';
import { 
    ButtonArea,
    Button,
    Preview,
    PreviewHeader,
    PreviewBody,
    PreviewFooter,
    PreviewItem,
    PreviewButton,
    Input,
    Label,
    Icon
} from 'react-weui';

const Itemdetails  = ({data,onDelete})=>{
    return (
        <div id="itemdetails">
        <Preview>
            <PreviewHeader>
                <PreviewItem label={data.status} value={"฿"+data.amount} />
            </PreviewHeader>
            <PreviewBody>
                <PreviewItem label={data.details} value={ "เพิ่มเมื่อ "+(new Date(Number(data.createtime))).toLocaleString() } />
                <PreviewItem label="Description" value="Product Description" />
                <PreviewItem label="Description" value="Product Description" />
                <PreviewItem label="Description" value="Product Description" />
                <PreviewItem label="Details" value="Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. " />
            </PreviewBody>
            <ButtonArea direction="horizontal">
                <Button type="warn" onClick={()=>{onDelete(data.ownlist,data.createtime)}}>ลบ</Button>
                <Button type="primary">ได้รับแล้ว</Button>
            </ButtonArea>
        </Preview>
        </div>
    )
};
export default Itemdetails