const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth.json'); //aqui fica a chafe que o jwt escuta para saber se o token é realmente do seu backend

module.exports=(req,res,next) =>{
	const authHeader= req.headers.authorization;

	if(!authHeader) //verifica se o token existe
		return res.status(401).send({error:'no token provided'});

	const parts= authHeader.split(' ');
	if(!parts.length === 2)// verifica se o token foi enviado em duas partes(Bearer TOKEN)
		return res.status(401).send({error:'token error'});

	const [schema, token ] = parts;

	if(!/^Bearer$/i.test(schema))// verifica se a primeira parte é o Bearer
		return res.status(401).send({error:'token malformatted'});

	jwt.verify(token,authConfig.secret, (err,decoded)=>{ //verifica se o token é realmente dá sua aplicação
		if(err) return res.status(401).send({error:'token invalid'});
	
	req.userId= decoded.id; //envia o id(o id é retirado do token) do usuário para os controllers
	return next();

	});
}; 