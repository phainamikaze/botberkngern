import React from 'react';
import { ButtonArea,
  Button,
  CellsTitle,
  CellsTips,
  Cell,
  CellHeader,
  CellBody,
  CellFooter,
  Form,
  FormCell,
  Icon,
  Input,
  Label,
  TextArea,
  Switch,
  Radio,
  Checkbox,
  Select,
  VCode,
  Agreement,
  Toptips,
  Page
} from 'react-weui';
export default class Addnew extends React.Component {
  render() {
    return (<Page>
        <CellsTitle>Forms</CellsTitle>
            <Form>
                <FormCell>
                    <CellHeader>
                        <Label>QQ</Label>
                    </CellHeader>
                    <CellBody>
                        <Input type="tel" placeholder="Enter your qq#"/>
                    </CellBody>
                </FormCell>
                <FormCell vcode>
                    <CellHeader>
                        <Label>Phone</Label>
                    </CellHeader>
                    <CellBody>
                        <Input type="tel" placeholder="Enter your cellphone #"/>
                    </CellBody>
                    <CellFooter>
                        <Button type="vcode">Send</Button>
                    </CellFooter>
                </FormCell>
            </Form>
            <CellsTips>Form Footer Tips</CellsTips>
    </Page>)
  }
};