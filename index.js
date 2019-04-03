const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const Users = require('./users/user-model');
const bcrypt = require('bcryptjs');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.get('/', (req, res) => {
    res.status(200).send("Full Authentication Workflow - Challenge III & IV")
})

server.post('/api/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 8);
    user.password = hash;

    Users
    .add(user)
    .then(saved => {
        res.status(201).json(saved);
    })
    .catch(error => {
        res.status(500).json(error);
    })
})



const port = process.env.PORT || 8000;
server.listen(port, () => 
    console.log(`*** Server is up and running on localhost:${port} ***`)
);