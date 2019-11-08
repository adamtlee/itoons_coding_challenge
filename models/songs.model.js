const songs = require('../db/db');

const getSongs = () => {
    return songs;
}

getSongDetail = (id) => {
    const foundSong = songs.find((
        song => {
            return song.id === id; 
        }
    ))

    return foundSong; 
}

deleteSong = (songId) => {
    let retrievedSong = getSongDetail(songId);
    if (retrievedSong){
        songs.splice(songs.indexOf(retrievedSong), 1); 
    }
}

module.exports = {getSongs, getSongDetail, deleteSong}; 