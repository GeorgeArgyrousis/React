// Proxy server due to issues
const PROXY = 'https://cors-anywhere.herokuapp.com/';

/**
 * Return the URL with the term to fetch.
 * @param {String} term 
 */
const getUrl = term => (
    PROXY + `http://dev-api.utelly.com/phoenix/9/user/55d730a6f7ec6e04e81b6747/suggest?term=${term}&auth=false`
)

/**
 * Get the keyword suggestions from the UTELLY Server.
 * 
 * @param {Function} callback 
 */
export const fetchKeywordSuggestions = (term, callback) => {
    const fetchUrl = getUrl(term);

    fetch(fetchUrl)
    .then(res => res.text())
    .then(res => res ? JSON.parse(res) : null)
    .then(data => {
        const stateName = 'suggestions';

        if (!data || !data.results) {
            callback(null, stateName, null);
        } else {
            const { 
                suggest_actors,
                suggest_genres,
                suggest_moods,
                suggest_topic_ctx_uk 
            } = data.results;

            const getPayload = object => object.map(item => item.payload);
            
            callback(null, 'suggestions', {
                personalised: getPayload(suggest_topic_ctx_uk),
                actors: getPayload(suggest_actors),
                genres: getPayload(suggest_genres),
                moods: getPayload(suggest_moods),
            });
        }
    })
    .catch(error => console.error(error));
}
