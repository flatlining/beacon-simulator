
FROM hypriot/rpi-node
MAINTAINER Matias Schertel <mschertel@gmail.com>

RUN [ "cross-build-start" ]

RUN apt-get update
RUN apt-get upgrade -y

RUN apt-get -y install bluetooth bluez libbluetooth-dev libudev-dev

WORKDIR /app/

COPY ./package.json /app/
RUN npm install

COPY . /app/

RUN [ "cross-build-end" ]

EXPOSE 3000

CMD [ "npm", "start" ]
