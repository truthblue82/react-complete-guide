import React, { Component } from 'react';

import classes from './App.css';

import Persons from '../components/Persons/Persons';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      {id: '1', name: 'Max', age: 28},
      {id: '2', name: 'Manu', age: 29},
      {id: '3', name: 'Yen', age: 30}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps');
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] ComponentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('[App.js] componentDidUpdate');
  }
  

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    let persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    let doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render () {
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
            persons={this.state.persons} 
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} 
            />
    }

    return (
        <div className={classes.App}>
          <Cockpit 
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler} />
          {persons}
        </div>
    );
  }
}

export default App;
