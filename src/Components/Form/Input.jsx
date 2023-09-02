import { Fragment, useState } from 'react';
import classes from './Input.module.css';

const Input = props => {
    const [error, setError] = useState('')

    return (
        <div>
            <input {...props} className={classes.input}></input>
            <span>{error}</span>
        </div>
    );
};

export default Input;