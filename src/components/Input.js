import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
    render() {
        return(
            <div className='input' 
            onChange={() => this.props.onChange(this.props.children)}>
                {this.props.children}
            </div>
        );
    };
}

export default Input;