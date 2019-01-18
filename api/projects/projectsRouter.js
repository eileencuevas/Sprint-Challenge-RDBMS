const express = require('express');
const helpers = require('../../data/helpers/helperFunctions');
const router = express.Router();

router.post('/', (req, res) => {
    helpers
        .addProject(req.body)
        .then(id => {
            res.status(201).json({ id: id[0], ...req.body });
        })
        .catch(() => {
            res.status(500).json({ error: `Couldn't add project to database.` });
        });
})

module.exports = router;