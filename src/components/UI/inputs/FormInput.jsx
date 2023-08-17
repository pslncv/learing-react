import React from 'react';
import classes from './FormInput.module.css'

const FormInput = (props) => {
    return ( 
        <input className={classes.formInput} {...props}>

        </input>
     );
}
 
export default FormInput;