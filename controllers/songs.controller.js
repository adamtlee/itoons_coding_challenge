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

    edit(songId, body) {
        const song = songModel.getSongDetail(songId);

        if (song) {
            if (body.title) {
                song.title = body.title
            } if (body.artist) {
                song.artist = body.artist
            } if (body.album) {
                song.album = body.album
            } if (body.year) {
                song.year = body.year
            } if (body.genre) {
                song.genre = body.genre
            }
        } 

        songModel.editSong(songId, song)

        return song;
    }
}
module.exports = SongController;
