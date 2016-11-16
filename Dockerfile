
FROM hypriot/rpi-node
MAINTAINER Matias Schertel <mschertel@gmail.com>

# Upgrade system
RUN apt-get update && apt-get upgrade -y

RUN apt-get -y install bluetooth bluez libbluetooth-dev libudev-dev

WORKDIR /app/

COPY . /app/
RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]
