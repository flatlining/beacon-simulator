# Beacon Simulator

A beacon simulator for the Raspberry Pi that supports Eddystone and iBeacon

## Usage

To use the beacon simulator:

1. Install dependencies `npm install`
2. Execute the server `npm start`
3. Open `localhost:3000`
4. Start the required type of beacon

# Docker

## Build

```bash
docker build -t flatlining/rpi-beacon-simulator .
```

## Run

```bash
docker run --net=host -p 3000:3000 --rm flatlining/rpi-beacon-simulator
```
