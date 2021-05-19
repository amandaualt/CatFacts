const mongoose = require("../../database");

const FactSchema = new mongoose.Schema({
  animal: {
    type: String,
    require: true,
  },
  fact: {
    type: String,
    require: true,
  },
  createrAt: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: String,
    require: false,
  },
});

module.exports = mongoose.model("Fact", FactSchema);
