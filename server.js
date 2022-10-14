require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const cors = require('cors');
const routes = require('./routes');

const PORT = 8080;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(routes);

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`CRUD TEST listening on port ${PORT}!`);
});
