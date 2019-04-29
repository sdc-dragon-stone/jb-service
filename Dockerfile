FROM node:6.16.0
RUN mkdir /descriptions
ADD . /descriptions
WORKDIR /descriptions
RUN npm install
RUN npm run build

EXPOSE 3210
CMD ["node", "server/index.js"]