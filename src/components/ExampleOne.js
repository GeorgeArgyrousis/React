import React, { Component } from 'react';

export default class ExampleOne extends Component {

    state = {
        value: 'JavaScript',
    };

    render() {
        const value = this.state.value;
        const toggle = () => {
            this.setState({
                value: 'JSX',
            });
        }

        return (
            <section>
                <h1>{value}</h1>
                <button onClick={() => toggle()}>Click Me</button>
            </section>
        );
    }
}
