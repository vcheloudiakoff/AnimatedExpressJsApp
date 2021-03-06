const express = require("express");
const bp = require("body-parser");
const path = require("path");

const port = 5000;
const app = express();

app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());

app.use(require("morgan")("dev"));

var stylesPath = path.join(__dirname + '/styles');
var imagesPath = path.join(__dirname + '/images');
var scriptsPath = path.join(__dirname + '/scripts');
app.use(express.static(stylesPath));
app.use(express.static(imagesPath));
app.use(express.static(scriptsPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/home.html'));
})

app.get('/left', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/left.html'));
})

app.get('/middle', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/middle.html'));
})

app.get('/right', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/right.html'));
})

app.listen(port, () => {
    console.log(`Express server listening on port : ${port}`);
});