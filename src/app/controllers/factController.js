const express = require("express");
const Fact = require("../model/Facts");
const User = require("../model/User");

const router = express.Router();

router.get("/", async function (req, res) {
  const busca = req.query.busca,
    facts = await Fact.find({ fact: new RegExp(busca) });

  res.send(facts);
});

router.post("/newFact", async (req, res) => {
  try {
    const email = req.body.user;
    const user = await User.findOne({ email }).select("+userType")
    if (!user) return res.status(400).send({ error: "User not found!" });

    if (user.userType !== "true") return res.status(401).send({ error: "User don't have permission" });

    const fact = {
      animal: req.body.animal,
      fact: req.body.fact
    };
    
    const facts = await Fact.create(req.body);
    return res.send({ facts });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ error: "Erro ao cadasrar fato." });
  }
});
module.exports = (app) => app.use("/facts", router);
