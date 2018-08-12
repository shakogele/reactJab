import React, { Component } from 'react';
import classes from './Person.css';

class Person extends Component {
  constructor (props) {
      super(props);
      console.log('[Pers.js] Constructot', props);
  }
  componentWillMount () {
      console.log('[Pers.js] Component Will Mount');
  }
  componentDidMount () {
      console.log('[Pers.js] Component Did Mount');
  }
  render () {
      console.log('[Pers.js] Inside Render')
      return (
        <div className={classes.Person}>
          <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} old</p>
          <p>
            <input type="text" onChange={this.props.changed} value={this.props.name}/>
          </p>
        </div>
      );
  }
}

export default Person;
