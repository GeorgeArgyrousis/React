import React from 'react';

/**
* Render the simple card for all other types
*/
const renderSimpleCard = (key, array) => (
    !!array.length && (
        <div key={key} className="card-container flex column">
            <h3>{key}</h3>
            {array.map(item => <span key={item.name} className="item flex">{item.name}</span>)}
        </ div>
    )
);

/**
 * Render the complex card for the Users
 */
const renderComplexCard = (key, personalised, onClick) => (
    !!personalised.length && (
        <div key={key} className={`card-container ${key} flex column`}>
            <h3>{key}</h3>
            {personalised.map(item => (
                <div onClick={e => onClick(e, 'id', item.id)} className="item-complex flex">
                    <img src={item.picture} />
                    <span key={item.name} className="name flex">{item.name}</span>
                </div>
            ))}
        </div>
    )
);

/**
 * Render the recommendations based on their type;
 * @param {Object} suggestions 
 */
export const Recommendations = (suggestions, onClick) => {
    const cards = {
        actors: renderSimpleCard,
        genres: renderSimpleCard,
        moods: renderSimpleCard,
        personalised: (key, personalised) => renderComplexCard(key, personalised, onClick),
    };

    return Object.keys(suggestions).map(key => cards[key](key, suggestions[key]));
}
