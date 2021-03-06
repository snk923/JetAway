const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config.js');

class Africa extends Model {}

Africa.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          destination_name: {
            type: DataTypes.STRING
          },
          lookupName: {
            type: DataTypes.STRING
          },
          url: {
            type: DataTypes.STRING,
          },
          description: {
            type: DataTypes.TEXT
          },
          departure: {
            type: DataTypes.STRING
          },
          arrival: {
            type: DataTypes.STRING
          },
          
         
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'africa',
      }
);

module.exports = Africa;