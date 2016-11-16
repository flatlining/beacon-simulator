
FROM hypriot/rpi-node
MAINTAINER Matias Schertel <mschertel@gmail.com>

# Upgrade system
RUN apt-get update && apt-get upgrade -y

RUN apt-get -y install bluetooth bluez libbluetooth-dev libudev-dev

RUN apt-get -y install usbutils nano

WORKDIR /app/

EXPOSE 3000
VOLUME ["/app/"]

#CMD [ "bash" ]
