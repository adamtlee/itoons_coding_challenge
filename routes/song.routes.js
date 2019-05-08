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

router.get('/', getSongs);

module.exports = router;