import React, { Component } from 'react';

import Header from './components/Header';
import Shots from './components/Shots';

import './App.css';

import { name, year } from './data/author';

const styles = {
  textAlign: 'center',
  margin: '35px 0',
  fontSize: '13px',
  color: '#AAA'
};

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Shots />
        <p style={ styles }>Writen by { name }. { year } .</p> 
      </div>
    );
  }
}

export default App;
