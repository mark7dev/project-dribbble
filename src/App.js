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
        <nav className='filters'>
          <ul>
            <li>
              <a href='#'>All <i className='fa fa-chevron-down' /> </a>
            </li>
            <li>
              <a href='#'>Popular <i className='fa fa-chevron-down' /> </a>
            </li>
            <li>
              <a href='#'>Recent <i className='fa fa-chevron-down' /></a>
            </li>
            <li>
              <a href='#'>Debut <i className='fa fa-chevron-down' /></a>
            </li>
          </ul>
        </nav>
        <Shots />
        <p style={ styles }>Writen by { name }. { year } .</p> 
      </div>
    );
  }
}

export default App;
