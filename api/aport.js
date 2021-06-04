module.exports = (app) => {
  const newAport = async (req, res) => {
    const schema = app.schemas.aportSchema;
    const aport = { ...req.body };

    try {
      await schema.aportSchema.validate(aport);

      const getCashier = await app
        .db("cashiers")
        .where({ id: aport.cashier_id });

      if (getCashier && !getCashier.length)
        return res.status(404).json({ error: "Cashier não encontrado" });

      app
        .db("aports")
        .insert(aport)
        .then((_) =>
          res.status(200).json({ message: "Aporte realizado com sucesso" })
        )
        .catch((err) => res.status(500).json(err));
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  return { newAport };
};
