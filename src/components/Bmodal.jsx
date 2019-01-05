import React from 'react';
import '../style/Bmodal.css'
const Bmodal  = (props)=>{
    return (
        <div id="myModal" className="modal">
            <div className="modal-content">
                <div className="modal-header">
                <span className="close" onClick={()=>{props.show("FAB")}} >&times;</span>
                </div>
                <div className="modal-body">
                    {props.children}
                </div>
            </div>
        </div>
    )
};
export default Bmodal