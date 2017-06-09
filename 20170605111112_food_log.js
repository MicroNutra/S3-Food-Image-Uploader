exports.up = (knex) => {
  return knex.schema.createTable('food_log', (table) => {
    table.increments()
    table.string('user_id').notNullable().references('id').inTable('users').onDelete('CASCADE')
    table.string('food_name').notNullable()
    table.integer('quantity').notNullable().defaultTo(1)
    table.string('size').notNullable()
    table.timestamp('date_time').defaultTo(knex.fn.now())
  });
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('food_log');
};
