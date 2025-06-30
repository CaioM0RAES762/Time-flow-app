const jsonServer = require('json-server');
const path       = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, '..', 'db', 'db.json'));
const middle = jsonServer.defaults();

server.use(middle);
server.use(router);

// Exporta p/ Vercel (não chama listen)
module.exports = server;