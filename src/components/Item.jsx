import React from 'react';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import {
    Cell,
    CellHeader,
    CellBody,
    CellFooter,
} from 'react-weui';
import { 
    FaExclamationCircle,
    FaDollarSign,
    FaCheckCircle,
} from "react-icons/fa";
const Item = ({data,onClick}) => {
    TimeAgo.addLocale(en);
    const timeAgo = new TimeAgo('en-US');
    let statusIcon;
    if(data.status==="NEW"){
        statusIcon = <FaExclamationCircle style={{color: '#0083FF' ,marginRight: '5px'}}/>;
    }else if(data.status==="PAID"){
        statusIcon = <FaDollarSign style={{color: '#FFA500' ,marginRight: '5px'}}/>;
    }else if(data.status==="CONFIRM"){
        statusIcon = <FaCheckCircle style={{color: '#1AAD19' ,marginRight: '5px'}}/>;
    }
    return (
        <Cell access onClick={()=>{onClick(data)}}>
            <CellHeader>
            {statusIcon}
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