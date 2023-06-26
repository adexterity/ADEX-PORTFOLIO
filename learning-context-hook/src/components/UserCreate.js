/* import React from "react";
import Button from "./Button";
import Field from "./Field";

const UserCreate = () => {
  return (
    <>
      <Button />
      <Field />
    </>
  );
};

export default UserCreate;
 */

import React from 'react';
import Field from './Field';
import Button from './Button';

const UserCreate = ()=>{
  return(
    <div className='ui form'>
      <Field />
      <Button />
    </div>
  )
}

export default UserCreate;