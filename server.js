require("dotenv").config();
require("./db/db");
const express = require("express");
const router = require("./router/post.router");
const { default: mongoose } = require("mongoose");
var cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}));

app.use(express.json());
app.use("/v1", router);

app.listen(PORT, () => {
  console.log(`server is runnig on port ${PORT}`);
});
