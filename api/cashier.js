module.exports = (app) => {
  const openCashier = async (req, res) => {
    const schema = app.schemas.cashierSchema;
    const cashier = { ...req.body };

    try {
      await schema.cashierSchema.validate(cashier);

      app
        .db("cashiers")
        .insert(cashier)
        .then((_) =>
          res.status(200).json({ message: "Caixa aberto com sucesso" })
        )
        .catch((err) => res.status(500).json(err));
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  const closeCashier = async (req, res) => {
    const schema = app.schemas.cashierSchema;
    const cashier = { ...req.body };

    if (req.params.id) cashier.id = req.params.id;

    try {
      await schema.cashierSchema.validate(cashier);

      app
        .db("cashiers")
        .update(cashier)
        .where({ id: cashier.id })
        .then((_) =>
          res.status(200).json({ message: "Caixa Fechado com sucesso" })
        )
        .catch((err) => res.status(500).json(err));
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  return { openCashier, closeCashier };
};
