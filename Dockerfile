FROM node:18.5.0

WORKDIR /home/node/app

EXPOSE 3000

USER node

CMD [ "tail", "-f", "/dev/null"]
