import React, { Component } from 'react';
import MusicList from '../components/MusicList';

export default class top20Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songs: []
        }
    }

    componentDidMount() {
        const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({ songs: data.feed.entry }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <h1>container</h1>
                <MusicList songs={this.state.songs} />
            </div>
        )
    }
}