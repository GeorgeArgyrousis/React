import React, { Component } from 'react';

export default class ExampleSiz extends Component {

    state = {
        value: '',
    };

    chnageName = (e) => {
        const name = e.target.value;
        this.setState({
            value: name,
        });
    }

    render() {
        const value = this.state.value;

        return (
            <section>
                <h1>{value}</h1>
                <input
                    type="text"
                    onChange={(e) => this.chnageName(e)}
                    placeholder="Name"
                >
                </input>
            </section>
        );
    }
}
