exports.up = (knex) => {
  return knex.schema.createTable('macro_nutrients', (table) => {
    table.increments();
    table.integer('food_id').references('id').inTable('food_log').onDelete('CASCADE')
    table.string('protein')
    table.string('fats')
    table.string('carbohydrates')
    table.string('calories')
    table.string('fibers')
    table.string('sugars')
    table.string('water')
  });
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('macro_nutrients');
};
