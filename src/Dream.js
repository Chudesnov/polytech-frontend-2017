import React, { Component } from 'react';

class Dream extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fieldValue: '',
            dreamValue: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        this.setState({fieldValue: event.target.value});
    }

    handleClick() {
        this.setState({dreamValue: this.state.fieldValue});
    }

    render() {
        return (
            <div className="Dream">
                    <input type="text" value={this.state.fieldValue} onChange={this.handleChange} />
                    <button onClick={this.handleClick}>Make it real</button>
                    <br />
                    <span>{this.state.dreamValue}</span>
            </div>
        );
    }
}

export default Dream;