import React from 'react';
import './Person.css';

const person = (props) => {
  return (
    <div className="Person">
      <p>I am {props.name} and I am {props.age} old</p>
      <p onClick={props.click}>{props.children}</p>
      <p>
        <input type="text" onChange={props.changed} value={props.name}/>
      </p>
    </div>
  );
}

export default person;
