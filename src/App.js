import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
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
    const persons = [...this.state.persons];
    persons[index].name = event.target.value;
    this.setState({persons, persons});
  };

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  };
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons, persons});
  }

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
              {this.state.persons.map((person, index) => {
                  return <Person
                    click={this.deletePersonHandler.bind(this, index)}
                    changed={(event) => {this.changeNameHandler(event, index); }}
                    name={person.name}
                    age={person.age}
                    key={person.id}/>
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
