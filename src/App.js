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
  constructor() {
    super();

    this.state = {
      lang: 'en'
    };
  }

  changeLanguage = (e) => {
    this.setState({
      lang: e.target.textContent.toLowerCase()
    })
  }

  renderListBasedOnLanguage = () => {
    if (this.state.lang === 'en') {
      return (
        <ul>
          <li>
            <a href='#'>
              All
              <i className='fa fa-chevron-down' />
            </a>
          </li>
          <li>
            <a href='#'>
              Popular
              <i className='fa fa-chevron-down' />
            </a>
          </li>
          <li>
            <a href='#'>
              Recent
              <i className='fa fa-chevron-down' />
            </a>
          </li>
          <li>
            <a href='#'>
              Debut
              <i className='fa fa-chevron-down' />
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul>
          <li>
            <a href='#'>
              Todos
              <i className='fa fa-chevron-down' />
            </a>
          </li>
          <li>
            <a href='#'>
              Famosos
              <i className='fa fa-chevron-down' />
            </a>
          </li>
          <li>
            <a href='#'>
              Ahora
              <i className='fa fa-chevron-down' />
            </a>
          </li>
          <li>
            <a href='#'>
              Nuevos
              <i className='fa fa-chevron-down' />
            </a>
          </li>
        </ul>
      );
    }
  }

  render () {
    return (
      <div>
        <Header />
        <button onClick= { this.changeLanguage }>ES</button>
        <button onClick= { this.changeLanguage }>EN</button>
        <nav className='filters'>
          { this.renderListBasedOnLanguage() }
        </nav>
        <Shots />
        <p style={ styles }>Writen by { name }. { year } .</p> 
      </div>
    );
  }
}

export default App;
