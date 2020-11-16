import React from 'react';

import './FetchRandomUser.css'
export default class FetchRandomUser extends React.Component {
    state = {
        loading: true,
        person: null
    }
    
    async componentDidMount() {
        const url = 'https://pixabay.com/api/?key=19132641-d273f871697b4703b76d1f0a7&q=yellow+flowers&image_type=photo&pretty=true';
        const response = await fetch(url);
        const data = await response.json();

        this.setState({person: data.hits[Math.floor(Math.random() * data.hits.length)], loading: false})
    }

    render() {
        if (this.state.loading) {
            return <div>loading...</div>
        }
        if (!this.state.person) {
            return <div>We have a problems...</div>
        }
        return (
                <img className="randomPhoto" src={this.state.person.previewURL} />
                // {/* <div className="fullName">
                // <div>{this.state.person.name.first}</div>
                // <div>{this.state.person.name.last}</div>
                // </div>
                // <div className="location">
                // <div>{this.state.person.location.city}</div>
                // <div>{this.state.person.location.country}</div>
                // </div>
                // <div className="contacts">
                // <a className="email" href={this.state.person.email}>{this.state.person.email}</a>
                // <div>{this.state.person.phone}</div>
                // </div> */}
                
        );
    }
}