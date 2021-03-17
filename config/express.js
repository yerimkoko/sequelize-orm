const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { Test } = require('../src/models');

module.exports = function () {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());

  app.get('/ping', (req, res) => {
    res.status(200).send('pong');
  });

  require('../src/app/User/userRoute')(app);
  require('../src/app/test/testRoute')(app);

  return app;
};
