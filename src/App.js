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
      ]
    })
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

    return (
      <div className="App">
          <h1 className="App-title">Shakogele</h1>
          <p>
            <button
              style = {style}
              onClick={this.switchNameHandler.bind(this, 'qaquca')}>Switch Name</button>
          </p>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}/>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            changed={this.changeNameHandler}
            click={this.switchNameHandler.bind(this, 'shmaquca')}>Gelenidze</Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
