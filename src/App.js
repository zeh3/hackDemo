import React from 'react';
import logo from './logo.svg';
import './App.css';
class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        events: []
      }
    }  
    componentDidMount() {
      getEvents().then(json => {
        console.log(json.events);
        this.setState({events: json.events})
      });
      
    }
    render () {
      
      return (
        <div>
          <h1> Schedule </h1>
          <p> welcome to hackillinois! </p>

          <ul>{this.state.events.map(event => <li>{event.name}</li>)}</ul>
        </div>
      );
    }
  
}
function printMessage() {
  return (
    <p>this still doesn't connect to the api I'm very sorry</p>
  )
}
//DO NOT CHANGE!!!!!!
function getEvents() {
  return fetch('https://api.hackillinois.org/event/', {
    method: 'GET' ,
    headers: {
      'Content-Type' : 'applications/json'
    }
  }).then(res => {
   return res.json();
  });
}

export default App;
