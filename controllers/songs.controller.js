const songModel = require('../models/songs.model'); 

class SongController {
    list(){
        const songs = songModel.getSongs(); 
        return songs;
    }
}

module.exports = SongController;
