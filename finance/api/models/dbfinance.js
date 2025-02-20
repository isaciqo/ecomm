'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dbFinance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  dbFinance.init({
    valor: DataTypes.FLOAT,
    nome: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    expiracao: DataTypes.STRING,
    cvv: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'dbFinance',
    //trocar o nome depois
  });
  return dbFinance;
};