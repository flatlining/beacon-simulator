// https://github.com/don/node-eddystone-beacon

var eddystoneBeacon = require('eddystone-beacon');
var options = {
  name: 'Eddy',      // set device name when advertising (Linux only)
  txPowerLevel: -22, // override TX Power Level, default value is -21,
  tlmCount: 2,       // 2 TLM frames
  tlmPeriod: 10      // every 10 advertisements
};
var url = 'https://google.com/';
eddystoneBeacon.advertiseUrl(url, [options]);
