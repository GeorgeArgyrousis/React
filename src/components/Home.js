import React, { PureComponent } from 'react';

import { fetchTutors } from '../requests/Requests';

export default class Home extends PureComponent {

    constructor(props) {
        super(props);

        fetchTutors(this.changeState);

        this.state = {
            tutors: [],
        }
    }

    changeState = (e, key, value) => {
        if (e !== null) e.preventDefault();

        this.setState({ [key]: value });
    }

    render() {
        const { tutors } = this.state;

        return (
            <section>
               
            </section>
        );
    }
}
