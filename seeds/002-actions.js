
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {description: 'test action 1', notes: 'testing', project_id: 1},
        {description: 'test action 2', notes: 'more testing', project_id: 1},
        {description: 'test action 3', project_id: 2}
      ]);
    });
};
