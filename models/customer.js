'use strict';

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Employee, Order}) {
      // TODO: define associations here
      // Belongs to employee
      this.belongsTo(Employee, {
        foreignKey: 'salesRepEmployeeNumber',
        onDelete: 'SET NULL'
      });

      this.hasMany(Order, {
        foreignKey: 'customerNumber',
        onDelete: 'SET NULL'
      });
    }
  }
  Customer.init(
    {
      customerNumber: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      customerName: {
        type: DataTypes.STRING(48)
      },
      contactLastName: {
        type: DataTypes.STRING(48)
      },
      contactFirstName: {
        type: DataTypes.STRING(48)
      },
      phone: {
        type: DataTypes.STRING(48)
      },
      addressLine1: {
        type: DataTypes.STRING(48)
      },
      addressLine2: {
        type: DataTypes.STRING(48)
      },
      city: {
        type: DataTypes.STRING(48)
      },
      state: {
        type: DataTypes.STRING(48)
      },
      postalCode: {
        type: DataTypes.STRING(48)
      },
      country: {
        type: DataTypes.STRING(48)
      },
      salesRepEmployeeNumber: {
        type: DataTypes.INTEGER
      },
      creditLimit: {
        type: DataTypes.INTEGER
      }
    },
    {
      sequelize,
      //* đặt tên cho bảng
      tableName: 'customers',
      modelName: 'Customer',
      timestamps: false
      //* loại bỏ các cột createdAt và updatedAt
    }
  );
  return Customer;
};
