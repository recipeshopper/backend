const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Controller = require('./controller.js');

const User = require('./model.js');

const server = express();
server.use(cors());
const port = process.env.PORT || 3030;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://root:admin1234@ds041167.mlab.com:41167/recipeshopdb', { useNewUrlParser: true, useCreateIndex: true });

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.get('/', (req, res) => {
    res.send('this is the backend!');
})

server.post('/createUser', (req, res) => Controller.createUser(req, res));

server.put('/login', (req, res) => Controller.login(req, res));

server.post('/newRecipe', (req, res) => {

})

server.listen(port, () => {
    console.log(`Server is up and running on ${port}`);
  });
  
  /*
v    const { username, password } = req.body;
    if (!username, !password ) return res.status(400).json({ data:'input username or password', status: 'failed' });
    User.find({})
        .then((err, data) => {
            if (err || !data) return res.status(400).json({ data: 'could not log in. incorrect password or username', status: 'failed' });
            return res.status(200).json({ data: data, status: 'success' });
        }) 
        .catch(err => {
            return res.status(400).json({ data: 'could not log in. incorrect password or username', status: 'failed' });
        })
  */