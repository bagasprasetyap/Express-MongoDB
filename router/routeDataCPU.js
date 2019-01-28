var router = require("express").Router();
var os = require("os");
var mongoose = require("mongoose");
var dataCPU = require("../models/dataCPU");
var url = "mongodb://bagas:1234@localhost:27017/datacpu";

mongoose.connect(
  url,
  () => {
    console.log("MongoDB Aktif!");
  }
);

router.get("/data", (req, res) => {
  new dataCPU({
    namacpu: os.hostname(),
    tipe: os.type(),
    platform: os.platform(),
    rilis: os.release(),
    ramSisa: os.freemem(),
    ramTotal: os.totalmem()
  })
    .save()
    .then(x => {
      res.send(x);
    });
});

router.get("/data", (req, res) => {
  dataCPU.find((err, result) => {
    console.log(result);
    res.send(result);
  });
});

module.exports = router;
