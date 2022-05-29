'use strict';

module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('Products', {
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
        type: DataTypes.STRING(10)
      },
      productVendor: {
        type: DataTypes.STRING(50)
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
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('Products');
  }
};
