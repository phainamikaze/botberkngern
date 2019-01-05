import React from 'react';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import {
    Cell,
    CellHeader,
    CellBody,
    CellFooter,
} from 'react-weui';
const Item = ({data,onClick}) => {
    TimeAgo.addLocale(en);
    const timeAgo = new TimeAgo('en-US');
    return (
        <Cell access onClick={()=>{onClick(data)}}>
            <CellHeader>
            {data.status}
            </CellHeader>
            <CellBody>
            {data.amount} - {data.details}
            </CellBody>
            <CellFooter>
            {timeAgo.format(new Date(Number(data.createtime)))}
            </CellFooter>
        </Cell>
    );
};
export default Item;