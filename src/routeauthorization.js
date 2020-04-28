const express = require('express');

const UserController = require ('./controllers/UserController');

const authMiddleware= require ('./middlewares/auth');//aqui lida com a segurançã do token que foi passado
const routes = express.Router();

routes.use(authMiddleware);

routes.delete('/user',UserController.delete);
routes.put('/user',UserController.update);



module.exports = routes;
