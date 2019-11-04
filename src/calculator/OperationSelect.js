import React, {Component} from 'react';

export default class OperationSelect extends Component {
  constructor(props) {
    super(props);
    const value = this.props.value;
    this.state = {
      value: value
        ? value
        : ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({value});
    this.props.onChange(
      value
      ? value
      : null);
  }

  render() {
    const {label, name, operations} = this.props;

    const options = Object.keys(operations).map((value, index) => {
      return <option key={index} value={value}>{operations[value]}</option>
    });

    return (<label htmlFor={name}>
      {label}
      <select id={name} required="required" value={this.state.value} onChange={this.handleChange}>
        <option value="">Vyber operáciu</option>
        {options}
      </select>
    </label>);
  }
}
