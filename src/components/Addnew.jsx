import React from 'react';
import { ButtonArea,
  Button,
  CellsTitle,
  CellsTips,
  CellHeader,
  CellBody,
  Form,
  FormCell,
  Input,
  Label,
  Icon
} from 'react-weui';

const Addnew  = (props)=>{
    return (
        <div className="footer">
        <from onSubmit={props.onSubmit}>
        <CellsTitle>เพิ่มใหม่
            <Icon value="clear" onClick={()=>{props.show("FAB")}} />
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
        <ButtonArea>
            <Button>
                OKa
            </Button>
        </ButtonArea>
        </from>
        </div>
    )
};
export default Addnew