import React from 'react';
import './Person.css';

const person = (props) => {
  const style = {

  };

  return (
    <div className="Person" style={style}>
      <p onClick={props.click}>I am {props.name} and I am {props.age} old</p>
      <p>
        <input type="text" onChange={props.changed} value={props.name}/>
      </p>
    </div>
  );
}

export default person;
