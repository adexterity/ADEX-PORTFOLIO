/* import React from "react";
import UserCreate from "./UserCreate";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <h3>
          Select Language:
          <i className="flag us"></i>
          <i className="flag ng"></i>
        </h3>
        <UserCreate />
      </div>
    );
  }
}

export default App;
 */

import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';



class App extends React.Component{
  state={
    language : 'english'
  }
  onLanguageChange = language=>{
    this.setState({language : language})
  }
  render(){
    return(
      <div className='ui container'>
        <h3>
          Select Language:
          <i className='flag us' onClick={()=>this.onLanguageChange('english')}/>
          <i className='flag ng' onClick={()=>this.onLanguageChange('yoruba')}/>
        </h3>
        <LanguageContext.Provider value={this.state.language}>
        <ColorContext.Provider value='pink'>

          <UserCreate />
        </ColorContext.Provider>
        </LanguageContext.Provider>
      </div>
    )
  }
}

export default App;