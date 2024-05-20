const { DataTypes } = require('sequelize');
const { USER_CUSTOMER, USER_ADMINISTRATOR,
   PEOPLE_STATE_ACTIVE, PEOPLE_STATE_DELETED, PEOPLE_STATE_INACTIVE, PEOPLE_STATE_UNVERIFIED } = require('../constants');

module.exports = (sequelize) => {
   sequelize.define('people', {
      id:{
         type: DataTypes.UUID,
         allowNull: false,
         primaryKey: true
      },
      fullName: {
         allowNull: false,
         type: DataTypes.STRING,
      },
      email:{
         type: DataTypes.STRING,
         allowNull:false,
         isEmail: true,
      },
      password: {
         type: DataTypes.STRING,
         allowNull:false
      },
      state: {
         type: DataTypes.ENUM,
         values: [PEOPLE_STATE_ACTIVE, PEOPLE_STATE_DELETED, PEOPLE_STATE_INACTIVE, PEOPLE_STATE_UNVERIFIED],
         allowNull: false,
     },
      typeOfPerson: {
         type: DataTypes.ENUM,
         allowNull: false,
         values: [USER_ADMINISTRATOR, USER_CUSTOMER]
      },
      image: {
         type: DataTypes.STRING,
         allowNull: true,
      },
      phone: {
         type: DataTypes.STRING,
         allowNull: true,
         defaultValue: ""
      },
      profession: {
         type: DataTypes.STRING,
         allowNull: true,
         defaultValue: ""
      },
   }, { timestamps: false });
};
