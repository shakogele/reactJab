import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>I am {props.name} and I am {props.age} old</p>
      <p>
        <input type="text" onChange={props.changed} value={props.name}/>
      </p>
    </div>
  );
}

export default Radium(person);
