module.exports = (app) => {
  const newSangria = async (req, res) => {
    const schema = app.schemas.sangriaSchema;
    const sangria = { ...req.body };

    try {
      await schema.sangriaSchema.validate(sangria);

      const getCashier = await app
        .db("cashiers")
        .where({ id: sangria.cashier_id });

      if (getCashier && !getCashier.length)
        return res.status(404).json({ error: "Cashier não encontrado" });

      app
        .db("sangrias")
        .insert(sangria)
        .then((_) =>
          res.status(200).json({ message: "Sangria realizada com sucesso" })
        )
        .catch((err) => res.status(500).json(err));
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  return { newSangria };
};
