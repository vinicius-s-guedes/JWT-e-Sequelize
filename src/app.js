const express = require('express');
const cors = require('cors');
const routes = require('./routes'); //aqui se localiza as rotas que não precisam de autenticação, como login, registro de usuário
const routeauthorization = require('./routeauthorization'); //aqui se localiza as rotas que precisam de autenticação
const db = require('./models');//db
const User = require('./models/User');

User.iniciar(db);
User.associar(db.models);


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(routeauthorization);
app.listen(3333);
