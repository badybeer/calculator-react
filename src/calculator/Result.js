import React, { Component } from 'react';

export default class Result extends Component {
    render() {
        const result = this.props.value;
        if (result || result === 0) return <div className="Result">Výsledok je: {result}</div>;
        else return null;
    }
}
