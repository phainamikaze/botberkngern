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
  Page
} from 'react-weui';
export default class Addnew extends React.Component {
  render() {
    return (
    <Page transition={false}>
        <CellsTitle>เพิ่มใหม่</CellsTitle>
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
                OK
            </Button>
        </ButtonArea>
    </Page>)
  }
};