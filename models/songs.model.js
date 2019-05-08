const songs = require('../db/db');

const getSongs = () => {
    return songs;
}

module.exports = {getSongs}; 