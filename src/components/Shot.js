import React from 'react';
import Cover from './Cover';
import Stats from './Stats';

class shot extends React.Component {
  render() {
    return (
        <article className='shot'>
            <Cover />
            <Stats />
        </article>
    );
  }
}

export default shot;