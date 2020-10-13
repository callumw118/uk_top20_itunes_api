import React from 'react';

export default function MusicItemDetail(props) {
    return (
        <div>
            <p>{props.index}</p>
            <p>{props.song.title.label}</p>
        </div>
    )
}