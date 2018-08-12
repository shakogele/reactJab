import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

  const assignedClasses = [];

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  };

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid teal',
    padding: '8px',
    color: 'teal',
    cursor: 'pointer'
  };

  return (
    <div>
        <h1 className="">Shakogele</h1>
        <p>
          <button
            style = {style}
            onClick={props.click}>Toggle Persons</button>
        </p>
    </div>
  );
}
export default cockpit;
