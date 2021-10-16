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
app.get('/detail/:id', logging.requestTrack, MovieController.getDetail)

// falltrough 404
app.use((req, res, next) => {
  res.status(404)
  res.send({
    message: 'Api not found'
  })
})

// error handler
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
