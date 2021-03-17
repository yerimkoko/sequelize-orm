const express = require('express');
const cors = require('cors');
require('dotenv').config();

module.exports = function () {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());

  app.get('/ping', (req, res) => {
    res.status(200).send('pong');
  });

  require('../src/app/test/testRoute')(app);
  require('../src/app/Member/memberRoute')(app);

  return app;
};
