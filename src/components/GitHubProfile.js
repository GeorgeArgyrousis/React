import React, { Component } from 'react';

export default class GitHubProfile extends Component {
    state = {
        searchTerm: '',
        username: '',
        name: '',
        avatar: '',
        location: '',
        repos: '',
        followers: '',
        following: '',
        homeUrl: '',
        invalid: false,
        fetched: false,
    }

    updateSearchTerm = (e) => {
        const searchTerm = e.target.value;

        this.setState({
            searchTerm,
            fetched: false,
            invalid: false,
        });
    }

    fetchUser = () => {
        const API = 'https://api.github.com/users';
        const username = this.state.searchTerm;
        const url = API+ '/' + username;

        fetch(url)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                this.setState({
                    username: data.login,
                    name: data.name,
                    avatar: data.avatar_url,
                    location: data.location,
                    repos: data.public_repos,
                    followers: data.followers,
                    following: data.following,
                    homeUrl: data.html_url,
                    notFound: data.message,
                    fetched: true,
                })
            })
            .catch((error) => {
                console.error(error);
                this.setState({
                    invalid: true,
                    fetched: true,
                });
            });
    }

    renderCard = () => {
        const {username, name, avatar, location, repos, followers, following, homeUrl, fetched} = this.state;
        if(!fetched) return null;

        return (
            <div className="card">
                <div className="user">
                    <img src={avatar}></img>
                    <h1>{username}</h1>
                    <h2>{name}</h2>
                    <h3>{location}</h3>
                </div>
                <div className="details">
                    <h3>Repos: {repos}</h3>
                    <h3>Followers: {followers}</h3>
                    <h3>following: {following}</h3>
                </div>
                <span>You can visit <a href={homeUrl}>{username} here!</a></span>
            </div>
        );

    }

    render() {
        const {searchTerm, invalid} = this.state; 
       
        return (
            <section>
                <div className="container">
                    {invalid ?
                        <div className="card">
                            <h1>{searchTerm} does not exist</h1>
                        </div>
                    :
                        this.renderCard()
                    }
                    <input className="search" onChange={(e) => this.updateSearchTerm(e)} value={searchTerm} placeholder="Username..." required></input>
                    <button onClick={() => this.fetchUser()}>Fetch</button>
                </div>
            </section>
        );
    }
}
