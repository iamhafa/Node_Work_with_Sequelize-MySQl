'use strict';

module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('Offices', {
      officeCode: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      city: {
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
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('Offices');
  }
};
