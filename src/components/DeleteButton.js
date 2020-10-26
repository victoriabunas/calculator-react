import React, { Component } from 'react';
import './DeleteButton.css';

class DeleteButton extends Component {
    render() {
        
        return(
            <div className='delete-button'
            onClick={this.props.handleClick}
            >
                {this.props.children}
            </div>
        )
    };
}

export default DeleteButton;