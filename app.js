const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT || "8080";

app.use(express.static("public"));

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
