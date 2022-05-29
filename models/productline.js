'use strict';

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ProductLine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Product}) {
      // define association here
      this.hasMany(Product, {
        foreignKey: 'productLine',
        onDelete: 'SET NULL'
      });
    }
  }
  ProductLine.init(
    {
      productLine: {
        type: DataTypes.STRING(50),
        primaryKey: true
      },
      textDescription: {
        type: DataTypes.STRING(4000)
      },
      htmlDescription: {
        type: DataTypes.STRING(4000)
      },
      image: {
        type: DataTypes.BLOB('medium')
      }
    },
    {
      sequelize,
      tableName: 'productlines',
      modelName: 'ProductLine',
      timestamps: false
    }
  );
  return ProductLine;
};
