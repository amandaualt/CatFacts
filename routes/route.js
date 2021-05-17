let http = require("http"),
  express = require("express"),
  app = express(),
  Facts = require("../model/facts");

app.get("/facts", async (req, res) => {
  const facts = await Facts.connect();
  const busca = req.query.busca,
    posts = await Facts.find(busca);
  facts
    .collection("facts")
    .find()
    .toArray((err, resp) => {
      if (err) throw err;
      console.log(resp);
      res.json(resp);
    });
});

app.listen(3000);
