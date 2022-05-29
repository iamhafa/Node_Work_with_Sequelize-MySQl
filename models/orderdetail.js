'use strict';

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class OrderDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Product, Order}) {
      // define association here
    }
  }
  OrderDetail.init(
    {
      orderNumber: {
        primaryKey: true,
        type: DataTypes.INTEGER(11)
      },
      productCode: {
        primaryKey: true,
        type: DataTypes.STRING(15)
      },
      quantityOrdered: {
        type: DataTypes.INTEGER(11)
      },
      priceEach: {
        type: DataTypes.DECIMAL(10, 2)
      },
      orderLineNumber: {
        type: DataTypes.SMALLINT(6)
      }
    },
    {
      sequelize,
      tableName: 'orderdetails',
      modelName: 'OrderDetail',
      timestamps: false
    }
  );
  return OrderDetail;
};
