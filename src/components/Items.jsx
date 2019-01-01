import React from 'react';
import {
    Cells,
    CellsTitle
} from 'react-weui';
import Item from './Item';
const Items = () => {
    const myitems = [0,1,2,2,3,3,3,3,3,,3,3,3,3,33];
    return (
        <div>
        <CellsTitle>List with Icon & Link</CellsTitle>
        <Cells>
        {myitems.map(myitem => (
            <Item/>
        ))}
        </Cells>
        </div>
    );
};
export default Items;