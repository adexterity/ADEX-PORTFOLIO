/* import React from "react";

class Button extends React.Component {
  render() {
    return <div>buttion</div>;
  }
}

export default Button;
 */

import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component{
  // static contextType = LanguageContext;
  renderSubmit(value){
    return value === 'english' ? "Submit" : "fikale";
  }
  
  render(){
    // const text = this.context === 'english' ? 'Submit' : 'fikale';
    return (
      <ColorContext.Consumer>
     {color =>( 
    <button className={`ui button ${color}`}>
    <LanguageContext.Consumer>
      {(value)=> this.renderSubmit(value)}
    </LanguageContext.Consumer>
    </button>)
      }
      </ColorContext.Consumer>
    )
  }
}

export default Button;