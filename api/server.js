const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../auth/auth-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);


server.get('/', (req, res) => {
    res.status(200).send("Full Authentication Workflow - Challenge III & IV")
})


module.exports = server;