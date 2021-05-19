const express = require("express");
const Fact = require("../model/Facts");

const router = express.Router();

router.get("/", async function (req, res) {
  const busca = req.query.busca,
    facts = await Fact.find({ fact: new RegExp(busca) });
  console.log(busca);
  res.send(facts);
});

router.post("/newFact", async (req, res) => {
  try {
    const facts = await Fact.create(req.body);
    return res.send({ facts });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ error: "Erro ao cadasrar fato." });
  }
});
module.exports = (app) => app.use("/facts", router);
