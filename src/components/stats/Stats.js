import React from 'react';

import './Stats.css';

class Stats extends React.Component {
    render () {
        return (
            <div className='shots__stats'>
                <ul className='shots__list'>
                    <li><i className='fa fa-eye' />{ this.props.v }</li>
                    <li><i className='fa fa-comment' />{ this.props.c }</li>
                    <li><i className='fa fa-heart' />{ this.props.l }</li>
                </ul>
             </div>
        )
    }
}

export default Stats;