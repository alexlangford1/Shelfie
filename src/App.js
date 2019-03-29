import React, { Component } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Dashboard from './components/Dashboard'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Header/>
         <div className="main-page">
         <Dashboard/>
         <Form/>
         </div>
      </div>
    );
  }
}

export default App;
