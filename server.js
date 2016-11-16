var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// http://stackoverflow.com/a/35580597/3806928
app.use('/', express.static(__dirname + '/www')); // redirect root
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap

io.on('connection', function(socket) {
    socket.on('eddystone-url', function(data) {
        console.log('eddystone-url: ' + JSON.stringify(data));

        var bleno = require('bleno');
        var eddystoneBeacon = require('eddystone-beacon');

        bleno.stopAdvertising();
        eddystoneBeacon.advertiseUrl(data.url, [data.options]);
    });
});

http.listen(3000, function() {
    console.log('listening on *:3000');
});
