import React from 'react';
import MusicItemDetail from './MusicItemDetail';

export default function MusicList(props) {

    const songList = props.songs.map((song, index) => {
        return <MusicItemDetail key={song.id} song={song} index={index + 1}/>
    })

    return (
        <div>
            {songList}
        </div>
    )
}