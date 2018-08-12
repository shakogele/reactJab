import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component{
    constructor (props) {
        super(props);
        console.log('[Persons.js] Constructot', props);
    }
    componentWillMount () {
        console.log('[Persons.js] Component Will Mount');
    }
    componentDidMount () {
        console.log('[Persons.js] Component Did Mount');
    }
    render() {
      console.log('[Persons.js] Inside Render')
      return this.props.persons.map((person, index) => {
          return <Person
              click={this.props.clicked.bind(this, index)}
              changed={(event) => {this.props.changed(event, index); }}
              name={person.name}
              age={person.age}
              key={person.id}/>
          });
    }
}

export default Persons;
