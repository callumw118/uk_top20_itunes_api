import React, { Component, Fragment } from 'react';
import MusicList from '../components/MusicList';
import './Top20Container.css';

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
            <Fragment>
                <header><h1>Charts Top 20</h1></header>
                <div className="container">
                    <MusicList songs={this.state.songs} />
                </div>
            </Fragment>
        )
    }
}