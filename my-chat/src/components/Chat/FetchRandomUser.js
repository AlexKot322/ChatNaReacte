import React from 'react';

import './FetchRandomUser.css'
export default class FetchRandomUser extends React.Component {
    state = {
        loading: true,
        person: null
    }
    
    async componentDidMount() {
        const url = 'https://api.randomuser.me/';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({person: data.results[0], loading: false})
    }

    render() {
        if (this.state.loading) {
            return <div>loading...</div>
        }
        if (!this.state.person) {
            return <div>We have a problems...</div>
        }
        return (
            <div className="cardPerson">
                <img src={this.state.person.picture.large} />
                <div className="fullName">
                <div>{this.state.person.name.first}</div>
                <div>{this.state.person.name.last}</div>
                </div>
                <div className="location">
                <div>{this.state.person.location.city}</div>
                <div>{this.state.person.location.country}</div>
                </div>
                <div className="contacts">
                <a className="email" href={this.state.person.email}>{this.state.person.email}</a>
                <div>{this.state.person.phone}</div>
                </div>
                
                
            </div>
        );
    }
}