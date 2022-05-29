'use strict';

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({OrderDetail, Product, Customer}) {
      // define association here
      this.belongsToMany(Product, {
        through: OrderDetail,
        as: 'products',
        foreignKey: 'orderNumber'
      });

      this.belongsTo(Customer, {
        foreignKey: 'customerNumber',
        onDelete: 'SET NULL'
      });
    }
  }
  Order.init(
    {
      orderNumber: {
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      orderDate: {
        type: DataTypes.DATE
      },
      requiredDate: {
        type: DataTypes.DATE
      },
      shippedDate: {
        type: DataTypes.DATE
      },
      status: {
        type: DataTypes.STRING(48)
      },
      comments: {
        type: DataTypes.TEXT
      },
      customerNumber: {
        type: DataTypes.INTEGER
      }
    },
    {
      sequelize,
      tableName: 'orders',
      modelName: 'Order',
      timestamps: false
    }
  );
  return Order;
};
