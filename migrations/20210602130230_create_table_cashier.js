exports.up = function (knex) {
  return knex.schema.createTable("cashiers", (table) => {
    table.string("id").notNullable().unique();
    table.date("openCashierTime").notNullable();
    table.bigInteger("company_id").notNullable();
    table.bigInteger("event_id").notNullable();
    table.bigInteger("sector_id").notNullable();
    table.string("operator_id").notNullable();
    table.string("operator_type").notNullable();
    table.string("operator_name").notNullable();
    table.decimal("total");
    table.decimal("cash");
    table.decimal("moneyInCashier");
    table.decimal("creditCard");
    table.decimal("debitCard");
    table.decimal("otherPayments");
    table.decimal("totalAports");
    table.decimal("totalSangria");
    table.date("closeCashierTime");
    table.integer("timesPrinted");
    table.integer("totalProducts");
    table.string("manager_name");
  });
};

exports.down = function (knex) {
  return knex.schame.dropTable("cashiers");
};
