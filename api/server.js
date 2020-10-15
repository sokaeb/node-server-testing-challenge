const express = require('express');

const StudentRouter = require('../students/students-router');
const server = express();


server.use(express.json());
server.use('/wizards', StudentRouter);

server.get('/', (req, res) => {
    res.status(200).json({ api: "running"});
});

module.exports = server;