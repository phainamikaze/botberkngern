import React from 'react';
import {
    Cells,
    CellsTitle
} from 'react-weui';
import Item from './Item';
const Items = ({items}) => {
    return (
        <div>
        <CellsTitle>List with Icon & Link</CellsTitle>
        <Cells>
        {items.map(myitem => (
            <Item key={myitem}/>
        ))}
        </Cells>
        </div>
    );
};
export default Items;