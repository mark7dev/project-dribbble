import React from 'react';

class Cover extends React.Component {
    render () {
        return (
            <figure>
                <img src={ this.props.image} alt='' />
            </figure>
        )
    }
}

export default Cover;
