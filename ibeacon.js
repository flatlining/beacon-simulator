// https://github.com/sandeepmistry/node-bleacon

var Bleacon = require('bleacon');

var uuid = 'e2c56db5dffb48d2b060d0f5a71096e0';
var major = 6; // 0 - 65535
var minor = 9; // 0 - 65535
var measuredPower = -59; // -128 - 127 (measured RSSI at 1 meter)

Bleacon.startAdvertising(uuid, major, minor, measuredPower);
