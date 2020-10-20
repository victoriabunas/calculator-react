import React, { Component } from 'react';
import './Calculator.css';
import Button from './Button'
import Input from './Input';
import ClearButton from './ClearButton';
import DeleteButton from './DeleteButton';
import History from './History';

class Calculator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: '',
            previousNumber: '',
            currentNumber: '',
            operator: '',
            storage: '',
        };
    }

    addToInput = val => {
        if (this.state.operator !== 'equally') {
            this.setState({ input: this.state.input + val });
        } else {
            this.setState({ input: val });
            this.state.operator = '';
        }
    };

    addDecimal = val => {
        try {
            if (this.state.input === '') {
                this.setState({ input: 0 + val })
            } else if (this.state.input.indexOf('.') === -1) {
                this.setState({ input: this.state.input + val });
            };
        } catch (error) {
            this.setState({ input: '' })
        }
    };

    addZeroToInput = val => {
        if (this.state.input !== '') {
            this.setState({ input: this.state.input + val });
        };
    };

    clearInput = () => {
        this.setState({ input: '' });
        this.state.currentNumber = '';
        this.state.previousNumber = '';
    };

    deleteSym = () => {
        try {
            this.setState({ input: this.state.input.slice(0, -1) })
        } catch (error) {
            this.setState({ input: '' })
        };
    };

    additional = () => {
        this.state.previousNumber = this.state.input;
        this.setState({ input: '' });
        this.state.operator = 'plus';
    };

    subtract = val => {
        if (this.state.input === '') {
            this.setState({ input: val })
        } else {
            this.state.previousNumber = this.state.input;
            this.setState({ input: '' });
            this.state.operator = 'subtract';
        };
    };

    multiply = () => {
        this.state.previousNumber = this.state.input;
        this.setState({ input: '' });
        this.state.operator = 'multiply';
    };

    devide = () => {
        this.state.previousNumber = this.state.input;
        this.setState({ input: '' });
        this.state.operator = 'devide';
    };

    equally = () => {

        if (this.state.operator === 'plus') {
            this.state.currentNumber = this.state.input;
            this.setState({
                input: parseFloat(this.state.previousNumber) + parseFloat(this.state.input)
            });
            localStorage.setItem('previousNumber', this.state.previousNumber);
            localStorage.setItem('currentNumber', this.state.currentNumber);
            localStorage.setItem('input', parseFloat(this.state.previousNumber) + parseFloat(this.state.input));
            localStorage.setItem('operator', '+')
        } else if (this.state.operator === 'subtract') {
            this.state.currentNumber = this.state.input;
            this.setState({
                input: parseFloat(this.state.previousNumber) - parseFloat(this.state.input)
            });
            localStorage.setItem('previousNumber', this.state.previousNumber);
            localStorage.setItem('currentNumber', this.state.currentNumber);
            localStorage.setItem('input', parseFloat(this.state.previousNumber) - parseFloat(this.state.input));
            localStorage.setItem('operator', '-')
        } else if (this.state.operator === 'multiply') {
            this.state.currentNumber = this.state.input;
            this.setState({
                input: parseFloat(this.state.previousNumber) * parseFloat(this.state.input)
            });
            localStorage.setItem('previousNumber', this.state.previousNumber);
            localStorage.setItem('currentNumber', this.state.currentNumber);
            localStorage.setItem('input', parseFloat(this.state.previousNumber) * parseFloat(this.state.input));
            localStorage.setItem('operator', '*')
        } else if (this.state.operator === 'devide') {
            this.state.currentNumber = this.state.input;
            this.setState({
                input: parseFloat(this.state.previousNumber) / parseFloat(this.state.input)
            });
            localStorage.setItem('previousNumber', this.state.previousNumber);
            localStorage.setItem('currentNumber', this.state.currentNumber);
            localStorage.setItem('input', parseFloat(this.state.previousNumber) / parseFloat(this.state.input));
            localStorage.setItem('operator', '/')
        } else if (this.state.operator === 'equally') {
            this.setState({
                input: this.state.input
            });
        }
        this.state.operator = 'equally';
    }

    addItem = () => {
        const newItem = localStorage.getItem('previousNumber') + localStorage.getItem('operator') + localStorage.getItem('currentNumber') + '=' + localStorage.getItem('input');
        this.setState({ storage: this.state.storage + newItem + '\r\n' })
    }

    render() {

        return (
            <div className='App'>
                <Input>{this.state.input}</Input>
                <div className='wrapper'>
                    <Button handleClick={this.addToInput}>7</Button>
                    <Button handleClick={this.addToInput}>8</Button>
                    <Button handleClick={this.addToInput}>9</Button>
                    <Button handleClick={this.devide}>/</Button>
                    <Button handleClick={this.addToInput}>4</Button>
                    <Button handleClick={this.addToInput}>5</Button>
                    <Button handleClick={this.addToInput}>6</Button>
                    <Button handleClick={this.multiply}>*</Button>
                    <Button handleClick={this.addToInput}>1</Button>
                    <Button handleClick={this.addToInput}>2</Button>
                    <Button handleClick={this.addToInput}>3</Button>
                    <Button handleClick={this.additional}>+</Button>
                    <Button handleClick={this.addDecimal}>.</Button>
                    <Button handleClick={this.addZeroToInput}>0</Button>
                    <Button handleClick={this.equally}>=</Button>
                    <Button handleClick={this.subtract}>-</Button>
                    <ClearButton handleClear={this.clearInput}>Clear</ClearButton>
                    <DeleteButton handleClick={this.deleteSym}>DEL</DeleteButton>
                </div>

                <History handleClick={this.addItem}>
                    <p className='history-p'>history</p>
                    <p>{this.state.storage}</p>
                </History>
            </div>
        );
    };
}

export default Calculator;