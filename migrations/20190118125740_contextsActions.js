
exports.up = function(knex, Promise) {
  return knex.schema.createTable('contextsActions', table => {
      table.increments();
      table
        .integer('context_id')
        .unsigned()
        .references('contexts.id');
      table.
        integer('action_id')
        .unsigned()
        .references('actions.id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('contextsActions');
};
