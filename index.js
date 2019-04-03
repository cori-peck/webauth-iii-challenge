const express = require('express');
const helmet = require('helmet');
const knex = require('knex');
const knexConfig = require('./knexfile');

const server = express();
const Users = knex(knexConfig.development);

server.use(express.json());
server.use(helmet());

const port = process.env.PORT || 8000;
server.listen(port, () => 
    console.log(`*** Server is up and running on localhost:${port} ***`)
);