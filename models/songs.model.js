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

module.exports = {getSongs, getSongDetail}; 