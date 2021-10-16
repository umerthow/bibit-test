const express = require('express');
const app = express();

// health-check
app.get('/ping', function (req, res, next) {
  res.json({
    status: 'OK',
  });
});


app.use(function onError(err, req, res, next) {
  res
    .status(500)
    .send({
      error: true,
      message: err.message,
    })
    .end();
  console.error(err);
});


module.exports = app;
