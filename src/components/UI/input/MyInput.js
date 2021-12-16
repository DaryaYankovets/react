import React from 'react';
import classes from './MyInput.module.css';

const MyInput = (props) => {
    return (
        <input className={classes.myinput} {...props} />
    );
}

/* 
Для неконтролируемого MyInput
const MyInput = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} className={classes.myinput} {...props} />
    );
}) */

export default MyInput;