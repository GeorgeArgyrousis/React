import React, { Component } from 'react';

export default class ExampleFour extends Component {

    power = (number, raise=2) => {
        return Math.pow(number, raise);
    }

    render() {
        return (
            <section>
                <div>
                    <h1>
                        power(2) -> {this.power(2)}
                    </h1>
                </div>
                <div>
                    <h1>
                        power(2, 2) ->{this.power(2, 2)}
                    </h1>
                </div>
                <div>
                    <h1>
                        power(2, 3) ->{this.power(2, 3)}
                    </h1>
                </div>
            </section>
        );
    }
}
