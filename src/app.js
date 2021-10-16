const express = require('express');
const app = express();
const logging = require('./middleware/log')

// Controller
const MovieController = require('./controllers/movies_controller');

// health-check
app.get('/ping', function (req, res, next) {
  res.json({
    status: 'OK',
  });
});

app.get('/search', logging.requestTrack, MovieController.getData)
app.get('/detail', logging.requestTrack, MovieController.getDetail)

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
