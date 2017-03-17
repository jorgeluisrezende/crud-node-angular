var express = require("express"),
    body = require ("body-parser"),
    routes = require("./routes/routes.js"),
    port = 4200;
var app = express();


    app.use(body.urlencoded({extended: true}));
    app.use(body.json());
    app.use(function (req, res, next) {
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8081');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
      res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });
    app.listen(port);
console.log("O servidor está escutando na porta: "+port);

routes(app);
