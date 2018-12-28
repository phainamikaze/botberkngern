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
const Formlist = (props) => {
    return (
        <Page transition={false}>
            <CellsTitle>สร้างลิสต์</CellsTitle>
            <Form>
                <FormCell>
                    <CellHeader>
                        <Label>ลิสต์</Label>
                    </CellHeader>
                    <CellBody>
                        <Input type="text" placeholder="กรอกชื่อลิสต์" id="listtitle"/>
                    </CellBody>
                </FormCell>
            </Form>
            <CellsTips>กรุณากรอกชื่อลิสต์</CellsTips>
            <ButtonArea>
                <Button onClick={() => props.createnewlist(document.getElementById('listtitle'))}>
                    OK
                </Button>
            </ButtonArea>
        </Page>
    );
};
export default Formlist;
