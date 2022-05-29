'use strict';

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Office extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Employee}) {
      // One-to-many

      this.hasMany(Employee, {
        foreignKey: 'officeCode',
        onDelete: 'SET NULL'
      });
    }
  }
  Office.init(
    {
      officeCode: {
        type: DataTypes.STRING,
        primaryKey: true
      },
      city: {
        type: DataTypes.STRING(48)
      },
      phone: {
        type: DataTypes.STRING(48)
      },
      addressLine1: {
        type: DataTypes.STRING(100)
      },
      addressLine2: {
        type: DataTypes.STRING(100)
      },
      state: {
        type: DataTypes.STRING(48)
      },
      country: {
        type: DataTypes.STRING(48)
      },
      postalCode: {
        type: DataTypes.STRING(48)
      },
      territory: {
        type: DataTypes.STRING(48)
      }
    },
    {
      sequelize,
      tableName: 'offices',
      modelName: 'Office',
      timestamps: false
    }
  );
  return Office;
};
