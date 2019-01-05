import React from 'react';
import {
    Cells,
    CellsTitle
} from 'react-weui';
import Item from './Item';
const Items = ({items,list}) => {
    return (
        <div>
        <CellsTitle>{list.title}</CellsTitle>
        <Cells>
        {items.map(myitem => (
            <Item key={myitem.createtime} data={myitem}/>
        ))}
        </Cells>
        </div>
    );
};
export default Items;