import React from 'react';
import { 
    Preview,
    PreviewHeader,
    PreviewItem,
    PreviewBody,
    PreviewFooter,
    PreviewButton
} from 'react-weui';

const Listdetail  = (props)=>{
    return (
        <div className="footer">
        <Preview>
            <PreviewHeader>
                <PreviewItem label="Total" value="$49.99" />
            </PreviewHeader>
            <PreviewBody>
                <PreviewItem label="Product" value="Name" />
                <PreviewItem label="Description" value="Product Description" />
                <PreviewItem label="Details" value="Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. " />
            </PreviewBody>
            <PreviewFooter>
                <PreviewButton >Action</PreviewButton>
                <PreviewButton primary>Action</PreviewButton>
            </PreviewFooter>
        </Preview>
        </div>
    )
};
export default Listdetail