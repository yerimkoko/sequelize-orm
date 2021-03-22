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

  require('../src/app/member/memberRoute')(app);
  require('../src/app/store/storeRoute')(app);

  return app;
};
