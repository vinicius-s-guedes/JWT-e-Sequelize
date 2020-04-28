const axios = require('axios');
const User = require('../models/User');
const bcrypt = require('bcrypt');

module.exports = {

    async store(req, res) { //cadastra usuario
      const {name , email} = req.body;
     const password = await bcrypt.hash(req.body.password, 10);

      const user = await User.create({name,email,password});
      user.password= undefined;
      return res.json(user);
    },

    async update(req, res) { //atualiza usuário
      const { name, email, password} = req.body;
      const idUser = req.userId; //id pego do token
      const user = await User.findByPk(idUser);

      if(!user){
        return res.json({'erro':'Cannot find user'});
      }

      const Queryreturn = await user.update({
       name, email, password
     });

      return res.json(Queryreturn);
    },

    async delete(req, res) { //deleta usuário
      const idUser = req.userId; //id pego do token

      const user = await User.findByPk(idUser);

      if(!user){
        return res.status(400).json({'error':'Cannot find user'});
      }

      const Queryreturn = await user.destroy();
      return res.json(Queryreturn);
    }


}
