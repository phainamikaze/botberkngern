import React from 'react';
import {
  Footer,
  FooterText
} from 'react-weui';
import '../style/viewer.css'

const Viewer = ({viewer,list}) => {
  let show,txt;
  let name,pic;
  if(viewer.owner===true && viewer.sharedWithMe===false){
    txt = "เรียกเก็บเงินจาก";
  }else if(viewer.owner===false && viewer.sharedWithMe===true){
    txt = "ค้างชำระให้กับ";
  }else{
    txt = "...";
  }
  if (viewer.profile){
    pic = <img src={viewer.profile.picture.data.url} className="viewer"/>
    name = viewer.profile.first_name+" "+viewer.profile.last_name;
    show = (<div>
      {pic}
      <Footer>
        {list.title}
        <FooterText>
         {txt} {name}
        </FooterText>
      </Footer>
      </div>);
  }else{
    show = (<div>
      <Footer>
        {list.title}
        <FooterText>
          ยังไม่ได้เรียกเก็บเงินจากใครเลย....
        </FooterText>
      </Footer>
      </div>);
  }


  return (
    <section id='viewers'>
      {show}
    </section>
  );
};
export default Viewer;