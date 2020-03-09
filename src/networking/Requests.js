const getHeaders = ({ user, currentVariant }) => ({
    "Authorization": user.authorization_token,
    "content-type": 'application/json',
    "X-AppKey": currentVariant.key,
});

const fetchDefault = (path, request, key, callback = null) => {
    fetch(path, request)
    .then(response => response.data)
    .then(response => {
        if (callback) callback(null, key, response);
    })
    .catch(error => {
        if (callback) callback(null, key, null);
        console.error(`Error ${request.method.toLowerCase()}ing @ ${path}`, error);
    });
}

const get = (path, headers, key, callback) => {
    fetchDefault(path, { headers }, key, callback);
}

const post = (path, payload, headers, key, callback) => {
    fetchDefault(path, {
        method,
        headers,
        body: JSON.stringify(payload),
    }, key, callback);
}
