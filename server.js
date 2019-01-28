var express = require("express");
var app = express();
var routerCPU = require("./router/routeDataCPU");

app.use(routerCPU);

app.get("/", (req, res) => {
  res.send("server aktif!");
});

app.listen(1234, () => {
  console.log("server aktif di port 1234");
});
