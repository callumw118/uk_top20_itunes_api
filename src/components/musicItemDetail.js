import React, { Fragment } from 'react';
import './MusicItemDetail.css';

export default function MusicItemDetail(props) {
    return (
        <Fragment>
            <tbody>
                <td>{props.index}</td>
                <td>{props.song.title.label}</td>
                <img src={props.song["im:image"][0].label} />
                <audio
                    controls
                    src={props.song.link[1].attributes.href}>
                </audio>
            </tbody>
        </Fragment>
    )
}