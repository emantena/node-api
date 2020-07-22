const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const dataBase = require('../bin/databaseConnection');

dataBase.connect();

//Rotas
const indexRoute = require('./routers/indexRoute');
const accountRoute = require('./routers/accountRoute');
const loginRoute = require('./routers/loginRoute');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', indexRoute);
app.use('/account', accountRoute);

app.use('/login', loginRoute);

module.exports = app;