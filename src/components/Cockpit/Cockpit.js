import React from 'react';
import classes from './Cockpit.module.css';

const cockpit = ( props ) => {
    const addClasses = [];
    let btnClass = '';
    if(props.showPersons) {
        btnClass = classes.Red;
    }
    if (props.persons.length <= 2) {
        addClasses.push('red');
    }
    if (props.persons.length <= 1) {
        addClasses.push('bold');
    }
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={addClasses.join(' ')}>This is really working!!!</p>
            <button
            className={btnClass}
            onClick={props.toggle}>Toggle Persons</button>
        </div>
     );
};

export default cockpit;