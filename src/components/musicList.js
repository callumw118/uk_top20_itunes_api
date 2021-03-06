import React from 'react';
import MusicItemDetail from './MusicItemDetail';

export default function MusicList(props) {

    const songList = props.songs.map((song, index) => {
        return <MusicItemDetail
            key={song.id.attributes["im:id"]}
            song={song}
            index={index + 1} />
    })

    return (
        <table cellSpacing="0">
            <thead>
                <th></th>
                <th></th>
            </thead>
            {songList}
        </table>
    )
}