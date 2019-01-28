var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var dataCPUSchema = new Schema({
  namacpu: String,
  tipe: String,
  platform: String,
  rilis: String,
  ramSisa: Number,
  ramTotal: Number
});

var dataCPU = mongoose.model("data", dataCPUSchema);

module.exports = dataCPU;
