const express = require("express");
const bodyparser = require("body-parser");

const User = require("./app/model/User");

const cors = require("cors");
const ejs = require("ejs");

const app = express();

/*
let cache = require('express-redis-cache')

cache = cache({
  prefix: 'redis-test',
  host: 'redis',
  port: 6379
});

cache.invalidate = (name) => {
  return (req, res, next) => {
    const route_name = name ? name : req.url;
    if (!cache.connected) {
      next();
      return;
    }
    cache.del(route_name, (err) => console.log(err));
    next();
  };
};
*/

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/app/"));
app.set("views", __dirname + "/app/");
app.engine("html", ejs.renderFile);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Methods", "*");
  res.header("Access-control-allow-headers", "*")
  app.use(cors());
  next();
});

require("./app/controllers/index")(app);

app.listen(process.env.PORT || 3000);
// app.listen(3000);