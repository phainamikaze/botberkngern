import React from 'react';
import { ButtonArea,
  Button,
  CellsTitle,
  CellsTips,
  CellHeader,
  CellBody,
  FormCell,
  Input,
  Label,
  Page,
  CellFooter,
  Icon
} from 'react-weui';
const Formlist = (props) => {
    
    return (
        <Page transition={false}>
        {/* Empty action attr enables 'Go' Submit Button on iOS Keyboard */}
            <form action="true" onSubmit={props.onSubmit} >
            <CellsTitle>สร้างลิสต์</CellsTitle>   
            <FormCell>
                <CellHeader>
                    <Label>ลิสต์</Label>
                </CellHeader>
                <CellBody>
                    <Input type="text" placeholder="กรอกชื่อลิสต์" />
                </CellBody>
                <CellFooter>
                    <Icon value="warn" />
                </CellFooter>
            </FormCell>
            
            <CellsTips>กรุณากรอกชื่อลิสต์</CellsTips>
            <ButtonArea>
                <Button>
                    OK
                </Button>
            </ButtonArea>
            </form>
        </Page>
    );
};
export default Formlist;
