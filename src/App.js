import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
      persons: [
        {
          name: 'Shalva',
          age: 29
        },
        {
          name: 'Demetre',
          age: 5
        },
        {
          name: 'Gabriel',
          age: 3
        }
      ]
  };
  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {
          name: newName,
          age: 30
        },
        {
          name: 'Demetre',
          age: 6
        },
        {
          name: 'Gabriel',
          age: 4
        }
      ]
    });
  };
  changeNameHandler = (event) => {
    this.setState({
      persons: [
        {
          name: 'Shalva',
          age: 30
        },
        {
          name: event.target.value,
          age: 6
        },
        {
          name: 'Gabriel',
          age: 4
        }
      ],
      showPersons: false
    })
  };
  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid teal',
      padding: '8px',
      color: 'teal',
      cursor: 'pointer'
    };
    let persons = null;
    if (this.state.showPersons) {
      persons = (
          <div>
              {this.state.persons.map(person => {
                  return <Person
                    name={person.name}
                    age={person.age}/>
                })
              }
          </div>
      )
    }
    return (
      <div className="App">
          <h1 className="App-title">Shakogele</h1>
          <p>
            <button
              style = {style}
              onClick={this.togglePersonsHandler}>Toggle Persons</button>
          </p>
          {persons}
      </div>
    );
  }
}

export default App;
