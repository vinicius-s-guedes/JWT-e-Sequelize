

const jwt = require('jsonwebtoken');


const User = require('../models/User');
const bcrypt = require('bcrypt');

const authConfig = require('./config/auth');


function generateToken(params = {}){
  return jwt.sign(params, authConfig.secret, {
          expiresIn: 86400,
         });
}

module.exports = {

    async login(req, res) { //Faz o login
      console.log(req);
      const {email} = req.body;
      // const passwordCrypt = await bcrypt.hash(password, 10);
      const user = await User.findOne({where:{ email}});
      if(!user){
        return res.status(400).json({'error':'Cannot find user'})
      }

        if(await bcrypt.compare(req.body.password, user.password)) {

         return res.json({
          token: generateToken({id: user.id}),
          user
        })
       } else {
        return  res.json({'error':'Not Allowed'})
      }



 }


    }
