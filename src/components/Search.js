import React, { PureComponent } from 'react';

import { fetchKeywordSuggestions } from '../requests/Requests';

import { PopUp } from './PopUp';
import { Recommendations } from './Recommendations';

export default class Search extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            term: '',
            id: null,
            suggestions: null,
        };
    }
    
    changeState = (e, key, value) => {
        if (e !== null) e.preventDefault();

        let state = { [key]: value };

        switch (key) {
            case 'term':
                if (value !== '') {
                    fetchKeywordSuggestions(value, this.changeState);
                } else if (value == '' && this.state[key] !== null) {
                    state = {
                        term: '',
                        suggestions: null,
                    }
                }
                break;
            
            default:
                break;
        }

        this.setState(state);
    }

    getDataOnId = id => {
        const { suggestions } = this.state;

        return suggestions.personalised.filter(item => item.id === id)[0];
    }

    render() {
        const { text, suggestions, id } = this.state;
        
        return (
            <>
                <section className="flex">
                    <div className="container column flex">
                        <h1>Search Recommendations</h1>
                        <form className="search-container column flex">
                            <input onChange={e => this.changeState(e, 'term', e.target.value)} value={text} type="text" placeholder="Search..." />
                            { suggestions && 
                                Recommendations(suggestions, this.changeState)
                            }
                        </form>
                    </div>
                </section>
                { id && 
                    PopUp(this.getDataOnId(id), this.changeState)
                }
            </>
        );
    }
}
