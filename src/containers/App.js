import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor (props) {
      super(props);
      console.log('[App.js] Constructot', props);
  }
  componentWillMount () {
      console.log('[App.js] Component Will Mount');
  }
  componentDidMount () {
      console.log('[App.js] Component Did Mount');
  }
  state = {
      persons: [
        {
          name: 'Shalva',
          age: 29,
          id: 0
        },
        {
          name: 'Demetre',
          age: 5,
          id: 3
        },
        {
          name: 'Gabriel',
          age: 3,
          id: 5
        }
      ]
  };

  changeNameHandler = (event, index) => {
    const personsArr = [...this.state.persons];
    personsArr[index].name = event.target.value;
    this.setState({persons: personsArr});
  };

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  };
  deletePersonHandler = (personIndex) => {
    const personsArr = [...this.state.persons];
    personsArr.splice(personIndex, 1);
    this.setState({persons: personsArr});
  }

  render() {
    console.log('[App.JS] Inside Render')
    let persons = null;
    if (this.state.showPersons) {
        persons = <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.changeNameHandler} />;
    }
    return (
        <div className={classes.App}>
            <Cockpit persons={this.state.persons} click={this.togglePersonsHandler} />
            {persons}
        </div>
    );
  }
}

export default App;
