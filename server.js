var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
    res.redirect('/eddystone-url');
});
app.get('/eddystone-url', function(req, res) {
    res.sendFile(__dirname + '/www/eddystone-url.html');
});
app.get('/eddystone-uid', function(req, res) {
    res.sendFile(__dirname + '/www/eddystone-uid.html');
});
app.get('/ibeacon', function(req, res) {
    res.sendFile(__dirname + '/www/ibeacon.html');
});
app.get('/favicon.png', function(req, res) {
    res.sendFile(__dirname + '/www/favicon.png');
});

// http://stackoverflow.com/a/35580597/3806928
//app.use('/', express.static(__dirname + '/www')); // redirect root
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap

io.on('connection', function(socket) {
    socket.on('eddystone-url', function(data) {
        console.log('eddystone-url: ' + JSON.stringify(data));

        var bleno = require('bleno');
        bleno.stopAdvertising();

        var eddystoneBeacon = require('eddystone-beacon');
        eddystoneBeacon.advertiseUrl(data.url, [data.options]);
    });

    socket.on('eddystone-uid', function(data) {
        console.log('eddystone-uid: ' + JSON.stringify(data));

        var bleno = require('bleno');
        bleno.stopAdvertising();

        var eddystoneBeacon = require('eddystone-beacon');
        eddystoneBeacon.advertiseUid(data.namespaceId, data.instanceId, [data.options]);
    });

    socket.on('ibeacon', function(data) {
        console.log('ibeacon: ' + JSON.stringify(data));

        var bleno = require('bleno');
        bleno.stopAdvertising();

        var bleacon = require('bleacon');
        bleacon.startAdvertising(data.uuid, data.major, data.minor, data.measuredPower);
    });
});

http.listen(3000, function() {
    console.log('listening on *:3000');
});
