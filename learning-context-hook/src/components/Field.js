/* import React from "react";

class Field extends React.Component {
  render() {
    return <h2>field goes here</h2>;
  }
}

export default Field;
 */

import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
class Field extends React.Component{
  // static contextType = LanguageContext;
  renderSubmit(value){
    return value === 'english'? 'Name:' : 'Oruko:';
  }
  render(){
    // const text = this.context === 'english' ? 'name' : 'oruko' ;
    return (
      <div className='ui field'>
        <label>
          <LanguageContext.Consumer>

            {(value)=>this.renderSubmit(value)}
          </LanguageContext.Consumer>
          </label>
        <input />
      </div>
    )
  }
}

export default Field;