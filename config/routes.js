module.exports = (app) => {
  app.route("/cashier").post(app.api.cashier.openCashier);
  app.route("/cashier/:id").put(app.api.cashier.closeCashier);
  app.route("/aport").post(app.api.aport.newAport);
  app.route("/sangria").post(app.api.sangria.newSangria);
};
