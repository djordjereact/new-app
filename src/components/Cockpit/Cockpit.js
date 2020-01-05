import React from 'react';
import classes from './Cockpit.css';

const cockpit = ( props ) => {
    const classes = [];
    let btnClass = '';
    if(props.showPersons) {
        btnClass = classes.red;
    }
    if (props.persons.length <= 2) {
        classes.push('red');
    }
    if (props.persons.length <= 1) {
        classes.push('bold');
    }
    return (
        <div>
            <h1>Hi, I`m React App</h1>
            <p className={classes.join(' ')}>This is really working!!!</p>
            <button
            className={btnClass}
            onClick={props.toggle}>Toggle Persons</button>
        </div>
     );
};

export default cockpit;