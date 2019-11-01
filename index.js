const express = require('express');
const db = require('./data/hubs-model.js');

const server = express();

server.listen(4000, () => {
  console.log('SERVER IS LISTENING ON A PORT YO');
});

server.get('/', (req, res) => {
  res.send('hello world...');
});

server.get('/hubs', (req, res) => {
  db.find()
    .then((hubs) => {
      res.status(200).json(hubs);
    })
    .catch((err) => {
      res.status(500).json({
        message: err,
        success: false
      });
    });
});

server.post('/hubs', (req, res) =>{
const hubInfo = req.body;
})