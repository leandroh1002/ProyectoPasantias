const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('publish', {
      idPublish:{
         type: DataTypes.INTEGER,
         allowNull:false,
         primaryKey: true,
         autoIncrement: true
      },
      namePublish:{
         type: DataTypes.STRING,
         allowNull:false
      },
      carrer:{
         type: DataTypes.STRING,
         allowNull:false
      },
      enterprise:{
         type: DataTypes.STRING,
         allowNull:false
      },
      perfilDescription: {
         type: DataTypes.STRING,
         allowNull:false
      },
      task: {
         type: DataTypes.STRING,
         allowNull:false
      },
      offer: {
         type: DataTypes.STRING,
         allowNull:false
      },
      otherDescription: {
         type: DataTypes.STRING,
         allowNull:false
      },
      image: {
         type: DataTypes.STRING,
         allowNull:false
      }
   }, { timestamps: false });
};
