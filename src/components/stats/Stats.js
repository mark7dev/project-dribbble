import React from 'react';

import './Stats.css';

class Stats extends React.Component {
    constructor(props) {
        super();

        this.state = {
          likes: props.l
        };
    }
      
    incrementLikes = (e) => {
        e.preventDefault();

        this.setState({
          likes: parseInt(this.state.likes) + 1
        });
    }

    render () {
        return (
            <div className='shots__stats'>
                <ul className='shots__list'>
                    <li><i className='fa fa-eye' />{ this.props.v }</li>
                    <li><i className='fa fa-comment' />{ this.props.c }</li>
                    <li><a href='#' onClick={ this.incrementLikes } ><i className='fa fa-heart' />{ this.state.likes }</a></li>
                </ul>
             </div>
        )
    }
}

export default Stats;