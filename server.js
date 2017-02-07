var express = require('express');
var app = express();
var port = 8080;

app.get('/:time', function (req, res) {
    var time = new Date(req.params.time);
    var timestamp = {};
    var unixtime = time.getTime();
    if (unixtime) {
       timestamp.unix = unixtime;
    }

    res.send(timestamp);
});


app.listen(port, function () {
    console.log("Now listening on port 8080");
});
