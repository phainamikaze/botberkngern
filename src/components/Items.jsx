import React from 'react';
import {
    Cells,
    CellsTitle
} from 'react-weui';
import Item from './Item';
const Items = ({items,list,itemdetail}) => {
    return (
        <div>
        <CellsTitle>{list.title}</CellsTitle>
        <Cells>
        {items.map(myitem => (
            <Item key={myitem.createtime} data={myitem} onClick={itemdetail}/>
        ))}
        </Cells>
        </div>
    );
};
export default Items;