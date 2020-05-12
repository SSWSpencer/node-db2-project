
exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl=>{
      tbl.increments();
      tbl.integer("year").notNullable();
      tbl.string("vin", 17).notNullable().unique();
      tbl.string("make").notNullable();
      tbl.string("model").notNullable();
      tbl.integer("mileage").notNullable();
      tbl.string("transmission");
      tbl.string("title_status");
      tbl.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knew.schema.dropTableIfExists("cars");
};
