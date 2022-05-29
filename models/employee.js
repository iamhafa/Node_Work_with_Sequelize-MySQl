'use strict';

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Customer, Office}) {
      // One-to-many
      this.hasMany(Customer, {
        foreignKey: 'salesRepEmployeeNumber',
        onDelete: 'SET NULL'
      });

      // Belongs to itself
      this.belongsTo(this, {
        foreignKey: 'reportsTo',
        onDelete: 'CASCADE',
        onUpdate: 'NO ACTION'
      });

      // Belongs to office
      this.belongsTo(Office, {
        foreignKey: 'officeCode',
        onDelete: 'SET NULL'
      });
    }
  }
  Employee.init(
    {
      employeeNumber: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      lastName: {
        type: DataTypes.STRING(48)
      },
      firstName: {
        type: DataTypes.STRING(48)
      },
      extension: {
        type: DataTypes.STRING(48)
      },
      email: {
        type: DataTypes.STRING(48)
      },
      officeCode: {
        type: DataTypes.STRING(48)
      },
      reportsTo: {
        type: DataTypes.INTEGER
      },
      jobTitle: {
        type: DataTypes.STRING(48)
      }
    },
    {
      sequelize,
      tableName: 'employees',
      modelName: 'Employee',
      timestamps: false
    }
  );
  return Employee;
};
