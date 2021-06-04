exports.up = function (knex) {
  return knex.schema.alterTable("cashiers", (table) => {
    table.string("serial_pos").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.alterTable("cashiers", (table) => {
    table.dropColumn("serial_pos");
  });
};
