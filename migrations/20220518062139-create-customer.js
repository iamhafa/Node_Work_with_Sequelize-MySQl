'use strict';

module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('Customers', {
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
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('Customers');
  }
};
