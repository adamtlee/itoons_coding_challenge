const songModel = require('../models/songs.model'); 

class SongController {
    list(){
        const songs = songModel.getSongs(); 
        return songs;
    }
    get(id){
        const song = songModel.getSongDetail(id); 

        return song;
    }
    delete(songId){
        songModel.deleteSong(songId); 
    }
}

module.exports = SongController;
