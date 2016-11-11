#!/bin/sh

if [ -n "$BEACON" ]; then
echo "$BEACON" > /data/beacon.js
else
if [ ! -f /data/beacon.js ]; then
cat > /data/beacon.js <<- EOM
var eddystoneBeacon = require('eddystone-beacon');
var options = {
  name: 'Eddystone',      // set device name when advertising (Linux only)
  txPowerLevel: -22, // override TX Power Level, default value is -21,
  tlmCount: 2,       // 2 TLM frames
  tlmPeriod: 10      // every 10 advertisements
};
var url = 'https://docker.com/';
eddystoneBeacon.advertiseUrl(url, [options]);
EOM
fi
fi

node /data/beacon.js
