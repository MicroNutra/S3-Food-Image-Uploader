exports.up = (knex) => {
  return knex.schema.createTable('micro_nutrients', (table) => {
    table.increments();
    table.integer('food_id').references('id').inTable('food_log').onDelete('CASCADE')
    table.boolean('is_mineral').notNullable().defaultTo(false)
    table.boolean('is_vitamin').notNullable().defaultTo(false)
    table.boolean('is_phytonutrient').notNullable().defaultTo(false)
    table.string('calcium')
    table.string('chromium')
    table.string('copper')
    table.string('flouride')
    table.string('iodine')
    table.string('iron')
    table.string('magnesium')
    table.string('manganese')
    table.string('molybdenum')
    table.string('phosphorus')
    table.string('selenium')
    table.string('zinc')
    table.string('potassium')
    table.string('sodium')
    table.string('chloride')
    table.string('vitamin_a')
    table.string('vitamin_c')
    table.string('vitamin_d')
    table.string('vitamin_e')
    table.string('vitamin_k')
    table.string('thiamin')
    table.string('riboflavin')
    table.string('niacin')
    table.string('vitamin_b6')
    table.string('folate')
    table.string('vitamin_b12')
    table.string('pathoethenic_acid')
    table.string('biotin')
    table.string('choline')
  });

};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('micro_nutrients');
};
