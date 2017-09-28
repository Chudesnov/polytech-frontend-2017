import React, { Component } from 'react';

class Dream extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div className="Dream">
                <input type="text" value={this.state.value} onChange={this.handleChange} />
            </div>
        );
    }
}

export default Dream;