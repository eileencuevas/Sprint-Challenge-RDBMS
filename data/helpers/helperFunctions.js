const knex = require('knex');
const knexConfig = require('../../knexfile');

const db = knex(knexConfig.development);

const getProjects = () => {
    return db('projects');
}

const getActions = () => {
    return db('actions');
}

const addProject = project => {
    return db('projects').insert(project);
}

const addAction = action => {
    return db('actions').insert(action);
}

module.exports = { getProjects, getActions, addProject, addAction };