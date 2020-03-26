const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesAPI = require('./routes/movies.js');
const {
  logErrors,
  errorHandler,
  wrapErrors,
} = require('./utils/middleware/errorHandlers');

const notFoundHandler = require('./utils/middleware/notFoundHandler');

app.use(express.json()); // Body parser middleware

// LAS RUTAS TAMBIEN SON MIDDLEWARES

// routes
moviesAPI(app);

// Catch 404
app.use(notFoundHandler);

// Erros middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`);
});

/*
app.get('/', function(req, res){
    res.send('Hello world')
})

app.get('/json', function(req, res){
    res.json("{Hello : 'world'}")
})

app.get("/user/:id", function(req, res) {
    res.send("user " + req.params.id);
});*/
