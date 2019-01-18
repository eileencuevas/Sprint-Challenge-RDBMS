
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contexts')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('contexts').insert([
        {name: 'test context 1'},
        {name: 'test context 2'},
        {name: 'test context 3'}
      ]);
    });
};
