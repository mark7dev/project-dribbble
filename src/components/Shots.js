import React, { Component } from 'react';
import Shot from './Shot';
import data from '../data/shots';
import shot from './Shot';

class Shots extends React.Component {
  render() {
    return (
      <div className='container'>
        { data.map(function(item) {
          return <Shot
                  key={ item.key }
                  image={ item.img }
                  views={ item.stats[0]}
                  comments={ item.stats[1] }
                  likes={ item.stats[2] } />
        })}
      </div>
    );
  }
}

export default Shots;
