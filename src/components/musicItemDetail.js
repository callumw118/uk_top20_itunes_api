import React from 'react';

export default function MusicItemDetail(props) {
    return (
        <div>
            <p>{props.index}</p>
            <img src={props.song["im:image"][0].label} />
            <p>{props.song.title.label}</p>
        </div>
    )
}