#!/usr/bin/env bash

docker run -p 3000:3000 -v $(pwd)/app/:/app/ -i -t --rm nod bash
