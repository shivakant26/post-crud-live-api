const express = require("express");
const router = require("./router/post.router");
const { default: mongoose } = require("mongoose");
var cors = require('cors')
require("dotenv").config();
require("./db/db");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/v1",router);
app.use(cors());

app.listen(PORT, () => {
  console.log(`server is runnig on port ${PORT}`);
});
