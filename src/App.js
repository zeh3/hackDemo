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
      //var date = new Date(this.state.events.startTime*100);
      return (
        
        <div>
          
          <h1> Schedule </h1>
          <p> welcome to hackillinois! </p>
          

          <ul>{this.state.events.map(event => <li>{event.name + ": " + event.description + " is on " + 
          new Date(event.startTime*1000).getMonth() + "/" + new Date(event.startTime*1000).getDate() + "/" + 
          new Date(event.startTime*1000).getFullYear() + " at " + //get MM/DD/YYYY
          new Date(event.startTime*1000).getHours() + ":" + new Date(event.startTime*1000).getMinutes() + "0" + //start time
          "-" + new Date(event.endTime*1000).getHours() + ":" + new Date(event.endTime*1000).getMinutes() + "0"}</li>)}</ul>
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
