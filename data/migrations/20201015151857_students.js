
exports.up = function(knex) {
  return knex.schema.createTable("students", tbl => {
      tbl.increments();

      tbl.string("name", 255).notNullable()
      tbl.string("house", 255)
      tbl.string("pet", 255)
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("students");
};
