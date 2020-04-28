const { DataTypes , Model} = require('sequelize');

class User extends Model {
   static iniciar(sequelize) {
    super.init({
        id : {
          type : DataTypes.INTEGER,
          autoIncrement:true,
          primaryKey:true,
          allowNull:false,
        },
        name : {
          type: DataTypes.STRING,
          allowNull : false,
        },
        email : {
          type: DataTypes.STRING,
          allowNull : false,
          unique: true,
        },
        password :{
          type: DataTypes.STRING,
          allowNull : false,
        }
      },
    { sequelize, modelName: 'users' });
  }//fim do iniciar

  static associar(models) {

  }
}

module.exports = User;
