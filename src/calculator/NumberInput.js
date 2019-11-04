import React, { Component } from 'react';

export default class NumberInput extends Component {
    constructor(props) {
        super(props);
        this.state = { value: this.props.value };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const value = event.target.value;
        this.setState({ value });
        this.props.onChange(Number(value));
    }

    render() {
        const { name, label } = this.props;

        return (
            <label htmlFor={name}>
                {label}
                <input id={name} type="number" name={name} required
                    value={this.state.value}
                    onChange={this.handleChange} />
            </label>
        );
    }
}
