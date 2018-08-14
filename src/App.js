import React, { Component } from 'react';

import Header from './components/Header';
import Shots from './components/Shots';

import './App.css';

import { name, year } from './data/author';

import { translate, Trans } from 'react-i18next';

const styles = {
  textAlign: 'center',
  margin: '35px 0',
  fontSize: '13px',
  color: '#AAA'
};

class App extends Component {
changeLanguage = e => {
  this.props.i18n.changeLanguage(e.target.textContent.toLowerCase());
};

  render () {
    return (
      <div>
        <Header />
        <div className='lang'>
          <button onClick= { this.changeLanguage }>ES</button>
          <button onClick= { this.changeLanguage }>EN</button>
        </div>
        <nav className='filters'>
          <ul>
            <li>
              <a href='#'>
                <Trans>All</Trans>
                <i className='fa fa-chevron-down' />
              </a>
            </li>
            <li>
              <a href='#'>
                <Trans>Popular</Trans>
                <i className='fa fa-chevron-down' />
              </a>
            </li>
            <li>
              <a href='#'>
                <Trans>Recent</Trans>
                <i className='fa fa-chevron-down' />
              </a>
            </li>
            <li>
              <a href='#'>
                <Trans>Debut</Trans>
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

export default translate('translations')(App);
