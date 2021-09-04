const express = require("express");
var path = require("path");

var app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile("index.html", { root: path.join(__dirname, "public") });
});

app.listen(5000);
console.info("\n\nRunning at http://localhost:5000\n\n");
