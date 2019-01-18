
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', table => {
      table.increments();
      table.string('description', 255).notNullable();
      table.string('notes', 1000).defaultTo('none');
      table
        .boolean('isComplete')
        .defaultTo(false);
      table
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('projects.id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
