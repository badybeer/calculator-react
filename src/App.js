import React, { Component } from 'react';
import CalculatorForm from './calculator/CalculatorForm';
import Result from './calculator/Result';
import './App.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { result: null };
        this.propagateResult = result => this.setState({ result });
    }

    render() {
        const title = 'React kalkulačka';

        return (
            <div className="App">
                <h1>{title}</h1>
                <CalculatorForm onResultChange={this.propagateResult} />
                <Result value={this.state.result} />
            </div>
        );
    }
}
