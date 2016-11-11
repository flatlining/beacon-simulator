#!/bin/sh

if [ -n "$BEACON" ]; then
	echo "$BEACON" > /data/beacon.js
else
	if [ ! -f /data/beacon.js ]; then
		echo "require('eddystone-beacon').advertiseUrl('https://docker.com');" > /data/beacon.js
	fi
fi

node /data/beacon.js
