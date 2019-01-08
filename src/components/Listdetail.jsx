import React from 'react';
import { 
    ButtonArea,
    Button,
    Preview,
    PreviewHeader,
    PreviewBody,
    PreviewItem,
} from 'react-weui';
const Listdetail  = ({data})=>{
    return (
        <div id="listdetails">
        <Preview>
            <PreviewHeader>
                <PreviewItem label={data.title} value={"฿"+data.amount} />
            </PreviewHeader>
            <PreviewBody>
                <PreviewItem label="" value={ "เพิ่มเมื่อ "+(new Date(Number(data.createtime))).toLocaleString() } />
                <PreviewItem label="Description" value="Product Description" />
                <PreviewItem label="Description" value="Product Description" />
                <PreviewItem label="Description" value="Product Description" />
                <PreviewItem label="Details" value="Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. " />
            </PreviewBody>
            <ButtonArea direction="horizontal">
                <Button type="warn" onClick={()=>{}}>ลบรายการ {data.title}</Button>
                <Button type="primary" onClick={()=>{}}>ยืนยันว่าได้รับแล้ว</Button>
            </ButtonArea>
        </Preview>
        </div>
    )
};
export default Listdetail