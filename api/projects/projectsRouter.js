const express = require('express');
const helpers = require('../../data/helpers/helperFunctions');
const router = express.Router();

router.get('/', (req, res) => {
    helpers
        .getProjects()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(() => {
            res.status(500).json({ error:`Couldn't retrieve projects. Try again.` });
        });
})

router.post('/', (req, res) => {
    helpers
        .addProject(req.body)
        .then(id => {
            res.status(201).json({ id: id[0], ...req.body });
        })
        .catch(() => {
            res.status(500).json({ 
                error: `Couldn't add project to database. Make sure to include a name.` 
            });
        });
})

router.get('/:id', (req, res) => {

})

module.exports = router;