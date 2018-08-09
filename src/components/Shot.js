import React from 'react';

import Cover from './Cover';
import Stats from './stats/Stats';

class shot extends React.Component {
  render() {
    return (
        <article className='shot'>
            <Cover image={ this.props.image }/>
            <Stats v={ this.props.views } c={ this.props.comments} l={ this.props.likes }/>
        </article>
    );
  }
}

export default shot;