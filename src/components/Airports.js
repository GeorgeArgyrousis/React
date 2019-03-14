import React, { Component } from 'react';

export default class Airports extends Component {
    state = {
        searchTerm: '',
        airports: [],
    }

    filterSearch = (e) => {
        e.preventDefault();
        const searchTerm = e.target.value;
        const airports = [];
        // const airports = searchTerm !== '' ?
        //     this.props.Data().filter((airport) => {
        //         return airport.name.toLowerCase().search(searchTerm.toLowerCase()) !== -1;
        //     })
        // :
        //     [];

        this.setState({
            searchTerm,
            airports,
        })

    }

    renderResults = () => {
        return null;
        // return this.state.airports.splice(0, 5).map((airport) => {
        //     return <a className="result" key={airport.name} href="#">{airport.name} {airport.city}</a>
        // });
    }

    render() {
        const {searchTerm} = this.state; 

        return (
            <section>
                <div className="container flex">
                    <input className="search" onChange={(e) => this.filterSearch(e)} value={searchTerm} placeholder="Search for Airport" required></input>
                    <div className="results">
                        {this.renderResults()}
                    </div>
                </div>
            </section>
        );
    }
}
