import React from 'react';
import {
    Cell,
    CellHeader,
    CellBody,
    CellFooter,
} from 'react-weui';
const Item = () => {
    return (
        <Cell access onClick={()=>{console.log('aaa')}}>
            <CellHeader>
                i
            </CellHeader>
            <CellBody>
                Title
            </CellBody>
            <CellFooter>
                Description
            </CellFooter>
        </Cell>
    );
};
export default Item;