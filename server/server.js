const express = require("express");
const server = express();

server
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");
    next();
  });

server.listen(3000, () =>
  console.log("Running server on http://localhost:3000")
);

server.get("/users", (req, res) => {
  const db = new sqlite3.Database("./gik339-labb2.db");
  db.all("SELECT * FROM USERS", (err, rows) => {
    res.send(rows);
  });
});

const sqlite3 = require("sqlite3").verbose();
