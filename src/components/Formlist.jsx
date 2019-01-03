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
  CellFooter,
  Icon
} from 'react-weui';
const Formlist = (props) => {
    let loader;
    if (props.loader === "REQUEST"){
        loader = <i className='weui-loading' />;
    }else if (props.loader === "REQUEST"){
        loader = <Icon value="success" />;
    }else if (props.loader === "FAILURE"){
        loader = <Icon value="warn" />;
    }
    return (
        <div>
        {/* Empty action attr enables 'Go' Submit Button on iOS Keyboard */}
            <form onSubmit={props.onSubmit} >
            <CellsTitle>สร้างลิสต์</CellsTitle>   
            <FormCell>
                <CellHeader>
                    <Label>ลิสต์</Label>
                </CellHeader>
                <CellBody>
                    <Input type="text" placeholder="กรอกชื่อลิสต์" />
                </CellBody>
                <CellFooter>
                    { loader }
                </CellFooter>
            </FormCell>
            
            <CellsTips>กรุณากรอกชื่อลิสต์</CellsTips>
            <ButtonArea>
                <Button>
                    OK
                </Button>
            </ButtonArea>
            </form>
        </div>
    );
};
export default Formlist;
