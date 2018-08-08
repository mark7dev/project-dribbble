import React from 'react';

class Stats extends React.Component {
    render () {
        return (
            <div className='shots__stats'>
                <ul className='shots__list'>
                    <li><i className='fa fa-eye' />3,827</li>
                    <li><i className='fa fa-comment' />17</li>
                    <li><i className='fa fa-heart' />322</li>
                </ul>
             </div>
        )
    }
}

export default Stats;