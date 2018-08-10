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

  render() {
    return (
      <div>
        <Header />
        <button onClick= { this.changeLanguage }>ES</button>
        <button onClick= { this.changeLanguage }>EN</button>
        <nav className='filters'>
          <ul>
            <li>
              <a href='#'>
                { this.state.lang === 'en' ? 'All' : 'Todos' }
                <i className='fa fa-chevron-down' />
              </a>
            </li>
            <li>
              <a href='#'>
                { this.state.lang === 'en' ? 'Popular' : 'Famosos' }
                <i className='fa fa-chevron-down' />
              </a>
            </li>
            <li>
              <a href='#'>
                { this.state.lang === 'en' ? 'Recent' : 'Ahora' }
                <i className='fa fa-chevron-down' />
              </a>
            </li>
            <li>
              <a href='#'>
                { this.state.lang === 'en' ? 'Debut' : 'Nuevos' }
                <i className='fa fa-chevron-down' />
              </a>
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
