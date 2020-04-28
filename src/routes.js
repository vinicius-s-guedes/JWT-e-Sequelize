const express = require('express');

const UserController = require ('./controllers/UserController');
const AuthServer = require ('./controllers/AuthServer');
const routes = express.Router();

routes.post('/user',UserController.store);
routes.post('/authenticate', AuthServer.login);

module.exports = routes;
