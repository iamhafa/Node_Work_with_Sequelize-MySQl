'use strict';

module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('Orders', {
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
        type: DataTypes.STRING
      },
      comments: {
        type: DataTypes.TEXT
      },
      customerNumber: {
        type: DataTypes.INTEGER
      }
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('Orders');
  }
};
