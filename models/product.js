'use strict';

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ProductLine, OrderDetail, Order}) {
      //* Product belongs to product line
      this.belongsTo(ProductLine, {
        foreignKey: 'productLine',
        onDelete: 'SET NULL'
      });

      //* belongs to many Order (through Order Detail)
      this.belongsToMany(Order, {
        through: OrderDetail,
        foreignKey: 'productCode',
        as: 'orders'
      });
    }
  }
  Product.init(
    {
      productCode: {
        primaryKey: true,
        type: DataTypes.STRING(15)
      },
      productName: {
        type: DataTypes.STRING(70)
      },
      productLine: {
        type: DataTypes.STRING(50)
      },
      productScale: {
        type: DataTypes.STRING(1000)
      },
      productVendor: {
        type: DataTypes.STRING(1000)
      },
      productDescription: {
        type: DataTypes.TEXT
      },
      quantityInStock: {
        type: DataTypes.SMALLINT(6)
      },
      buyPrice: {
        type: DataTypes.DECIMAL(10, 2)
      },
      MSRP: {
        type: DataTypes.DECIMAL(10, 2)
      }
    },
    {
      sequelize,
      tableName: 'products',
      modelName: 'Product',
      timestamps: false
    }
  );
  return Product;
};
