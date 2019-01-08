import React from 'react';
import { 
    ButtonArea,
    Button,
    CellsTitle,
    CellsTips,
    CellHeader,
    CellBody,
    Form,
    FormCell,
    Input,
    Label
} from 'react-weui';

const Additem  = (props)=>{
    return (
        <div id="additem">
        <form onSubmit={props.onSubmit}>
        <CellsTitle>เพิ่มใหม่
        </CellsTitle>
        <Form>
            <FormCell>
                <CellHeader>
                    <Label>จำนวน</Label>
                </CellHeader>
                <CellBody>
                    <Input type="number" placeholder="ใส่จำนวนเงิน (บาท)"/>
                </CellBody>
            </FormCell>
            <FormCell>
                <CellHeader>
                    <Label>รายละเอียด</Label>
                </CellHeader>
                <CellBody>
                    <Input type="text" placeholder=""/>
                </CellBody>
            </FormCell>
        </Form>
        
        <CellsTips>เพิ่มใหม่</CellsTips>
        <ButtonArea direction="horizontal">
            <Button type="primary" style={{backgroundColor:"#0083FF"}}>เพิ่ม</Button>
        </ButtonArea>
        </form>
        </div>
    )
};
export default Additem