exports.up = function (knex) {
  return knex.schema.createTable("sangrias", (table) => {
    table.string("id").notNullable();
    table.string("cashier_id").notNullable();
    table.decimal("sangria").notNullable();
    table.date("dateSangria").notNullable();
    table.integer("authorization_id").notNullable();
    table.string("authorization_name").notNullable();
    table.integer("authorization_type").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("sangrias");
};
