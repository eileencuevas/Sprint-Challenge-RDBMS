const knex = require('knex');
const knexConfig = require('../../knexfile');

const db = knex(knexConfig.development);


const addProject = project => {
    return db('projects').insert(project);
}

module.exports = { addProject };