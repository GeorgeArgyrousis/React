export const fetchTutors = (_load, url = './data/tutors.json') => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        _load(null, 'tutors', data);
    })
    .catch(error => console.error(error));
}
