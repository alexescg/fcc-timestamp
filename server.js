var express = require('express');
var app = express();
var port = 8080;

app.get('/', function (req, res) {
    res.send('hue');
});


app.listen(port, function () {
    console.log("Now listening on port 8080");
});
