import React, { Component } from 'react';

export default class ExampleOne extends Component {

    state = {
        name: 'George',
    };

    renderName = (name) => {
        return <h1>{name}</h1>
    }

    render() {
        const name = this.state.name;

        return (
            <section>
                <div>
                    {this.renderName(name)}
                </div>
            </section>
        );
    }
}
