
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Test Project 1', description: 'description for project'},
        {name: 'Test Project 2', description: 'another description for project'},
        {name: 'Test Project 3', description: 'description for project 3'}
      ]);
    });
};
