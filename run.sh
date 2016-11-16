#!/usr/bin/env bash

docker run --net=host -p 3000:3000 -v $(pwd)/app/:/app/ -i -t --rm nod bash
