import React, { Component } from 'react';

export default class ExampleThree extends Component {

    state = {
        number: 1,
        boolean: false,
        string: 'string',
        array: [],
        object: {}
    };

    renderTypes = () => {
        return Object.keys(this.state).map((item) => {
            return <h1>{item} is of type {typeof this.state[item]}</h1>
        });
    }

    toggle = () => {
        this.setState({
            string: 1,
        });
    }

    render() {
        return (
            <section>
                <div>
                    {this.renderTypes()}
                </div>
                <button onClick={() => this.toggle()}>Click Me</button>
            </section>
        );
    }
}
