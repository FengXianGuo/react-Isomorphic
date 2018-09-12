var express = require('express');
var router = express.Router();
import { renderToString } from 'react-dom/server'
import React from 'react';
import App from '../react/index';
/* GET home page. */
router.get('/', function(req, res, next) {
  const html = renderToString(<App/>)
  res.render('index',{
    html
  })
});

module.exports = router;
