import React, { Component } from 'react';
import './History.css';

class History extends Component {
    
    render() {
        return(
            <div className='history'
            onClick={() => this.props.handleClick(this.props.children)}>
                {this.props.children}
            </div>
        );
    };
}

export default History;