'use strict';

module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('ProductLines', {
      productLine: {
        type: DataTypes.STRING(50),
        primaryKey: true
      },
      textDescription: {
        type: DataTypes.STRING(4000)
      },
      htmlDescription: {
        type: DataTypes.STRING(4000)
      },
      image: {
        type: DataTypes.BLOB('medium')
      }
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('ProductLines');
  }
};
