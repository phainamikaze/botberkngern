import React from 'react';
import Formlist from '../components/Formlist';
class Createlist extends React.Component {
    savenewlist=(event) => {
        event.preventDefault();
        event.stopPropagation();
        //const data = new FormData(event.target);
        console.log(event.target[0].value);
      };
    render(){
        return(
            <Formlist onSubmit={this.savenewlist.bind(this)}/>
        );
    }

}

export default Createlist