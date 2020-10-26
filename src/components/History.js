import React, { Component } from 'react';
import './History.css';

class History extends Component {
    
    render() {
        return(
            <div className='history'>
                {this.props.children}
            </div>
        );
    };
}

export default History;