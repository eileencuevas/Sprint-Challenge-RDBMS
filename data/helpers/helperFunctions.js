const knex = require('knex');
const knexConfig = require('../../knexfile');

const db = knex(knexConfig.development);


const addProject = project => {
    return db('projects').insert(project);
}

const addAction = action => {
    return db('actions').insert(action);
}

module.exports = { addProject, addAction };