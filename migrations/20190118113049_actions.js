
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', table => {
      table.increments();
      table.string('description', 255);
      table.string('notes', 1000);
      table
        .boolean('isComplete')
        .defaultTo(false);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
