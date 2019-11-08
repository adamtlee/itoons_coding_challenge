const express = require('express'); 
const router = express.Router(); 

const SongController = require('../controllers/songs.controller');
const songController = new SongController(); 

const getSongs = (req, res) => {
    const getSongs = songController.list();

    if (getSongs) {
        return res.status(200).json(getSongs); 
    } else {
        return res.status(200).json([]);
    }
}

const getSongDetail = (req, res) => {
    let id = req.params.id; 
    id = Number.parseInt(id); 
    
    const retrieveSongDetail = songController.get(id); 

    if (retrieveSongDetail){
        return res.status(200).json(retrieveSongDetail); 
    } else {
        return res.status(404); 
    }
}

const deleteSong = (req, res) => {
    let id = req.params.id; 
    id = Number.parseInt(id);

    songController.delete(id);
    res.sendStatus(204);
}

router.get('/', getSongs);
router.get('/:id', getSongDetail); 
router.delete('/:id', deleteSong);

module.exports = router;