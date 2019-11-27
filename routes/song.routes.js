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

const editSong = (req, res)=> {
    let id = req.params.id; 
    id = Number.parseInt(id); 
    let body = req.body

    const retriveSong = songController.edit(body, id)

    if (retriveSong === false){
        return res.sendStatus(404).send({
            message: "item cannot be empty"
        }); 
    }   
    res.sendStatus(200).json(retriveSong); 
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
router.patch('/:id', editSong); 

module.exports = router;