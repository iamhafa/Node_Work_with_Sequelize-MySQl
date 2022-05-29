'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert('Orders', [
      {
        orderNumber: 10100,
        orderDate: '2003-01-06',
        requiredDate: '2003-01-13',
        shippedDate: '2003-01-10',
        status: 'Shipped',
        comments: null,
        customerNumber: 363
      },
      {
        orderNumber: 10101,
        orderDate: '2003-01-09',
        requiredDate: '2003-01-18',
        shippedDate: '2003-01-11',
        status: 'Shipped',
        comments: 'Check on availability.',
        customerNumber: 128
      },
      {
        orderNumber: 10102,
        orderDate: '2003-01-10',
        requiredDate: '2003-01-18',
        shippedDate: '2003-01-14',
        status: 'Shipped',
        comments: null,
        customerNumber: 181
      },
      {
        orderNumber: 10103,
        orderDate: '2003-01-29',
        requiredDate: '2003-02-07',
        shippedDate: '2003-02-02',
        status: 'Shipped',
        comments: null,
        customerNumber: 121
      },
      {
        orderNumber: 10104,
        orderDate: '2003-01-31',
        requiredDate: '2003-02-09',
        shippedDate: '2003-02-01',
        status: 'Shipped',
        comments: null,
        customerNumber: 141
      },
      {
        orderNumber: 10105,
        orderDate: '2003-02-11',
        requiredDate: '2003-02-21',
        shippedDate: '2003-02-12',
        status: 'Shipped',
        comments: null,
        customerNumber: 145
      },
      {
        orderNumber: 10106,
        orderDate: '2003-02-17',
        requiredDate: '2003-02-24',
        shippedDate: '2003-02-21',
        status: 'Shipped',
        comments: null,
        customerNumber: 278
      },
      {
        orderNumber: 10107,
        orderDate: '2003-02-24',
        requiredDate: '2003-03-03',
        shippedDate: '2003-02-26',
        status: 'Shipped',
        comments: 'Difficult to negotiate with customer. We need more marketing materials',
        customerNumber: 131
      },
      {
        orderNumber: 10108,
        orderDate: '2003-03-03',
        requiredDate: '2003-03-12',
        shippedDate: '2003-03-08',
        status: 'Shipped',
        comments: null,
        customerNumber: 385
      },
      {
        orderNumber: 10109,
        orderDate: '2003-03-10',
        requiredDate: '2003-03-19',
        shippedDate: '2003-03-11',
        status: 'Shipped',
        comments: 'Customer requested that FedEx Ground is used for this shipping',
        customerNumber: 486
      },
      {
        orderNumber: 10110,
        orderDate: '2003-03-18',
        requiredDate: '2003-03-24',
        shippedDate: '2003-03-20',
        status: 'Shipped',
        comments: null,
        customerNumber: 187
      },
      {
        orderNumber: 10111,
        orderDate: '2003-03-25',
        requiredDate: '2003-03-31',
        shippedDate: '2003-03-30',
        status: 'Shipped',
        comments: null,
        customerNumber: 129
      },
      {
        orderNumber: 10112,
        orderDate: '2003-03-24',
        requiredDate: '2003-04-03',
        shippedDate: '2003-03-29',
        status: 'Shipped',
        comments:
          'Customer requested that ad materials (such as posters, pamphlets) be included in the shippment',
        customerNumber: 144
      },
      {
        orderNumber: 10113,
        orderDate: '2003-03-26',
        requiredDate: '2003-04-02',
        shippedDate: '2003-03-27',
        status: 'Shipped',
        comments: null,
        customerNumber: 124
      },
      {
        orderNumber: 10114,
        orderDate: '2003-04-01',
        requiredDate: '2003-04-07',
        shippedDate: '2003-04-02',
        status: 'Shipped',
        comments: null,
        customerNumber: 172
      },
      {
        orderNumber: 10115,
        orderDate: '2003-04-04',
        requiredDate: '2003-04-12',
        shippedDate: '2003-04-07',
        status: 'Shipped',
        comments: null,
        customerNumber: 424
      },
      {
        orderNumber: 10116,
        orderDate: '2003-04-11',
        requiredDate: '2003-04-19',
        shippedDate: '2003-04-13',
        status: 'Shipped',
        comments: null,
        customerNumber: 381
      },
      {
        orderNumber: 10117,
        orderDate: '2003-04-16',
        requiredDate: '2003-04-24',
        shippedDate: '2003-04-17',
        status: 'Shipped',
        comments: null,
        customerNumber: 148
      },
      {
        orderNumber: 10118,
        orderDate: '2003-04-21',
        requiredDate: '2003-04-29',
        shippedDate: '2003-04-26',
        status: 'Shipped',
        comments:
          'Customer has worked with some of our vendors in the past and is aware of their MSRP',
        customerNumber: 216
      },
      {
        orderNumber: 10119,
        orderDate: '2003-04-28',
        requiredDate: '2003-05-05',
        shippedDate: '2003-05-02',
        status: 'Shipped',
        comments: null,
        customerNumber: 382
      },
      {
        orderNumber: 10120,
        orderDate: '2003-04-29',
        requiredDate: '2003-05-08',
        shippedDate: '2003-05-01',
        status: 'Shipped',
        comments: null,
        customerNumber: 114
      },
      {
        orderNumber: 10121,
        orderDate: '2003-05-07',
        requiredDate: '2003-05-13',
        shippedDate: '2003-05-13',
        status: 'Shipped',
        comments: null,
        customerNumber: 353
      },
      {
        orderNumber: 10122,
        orderDate: '2003-05-08',
        requiredDate: '2003-05-16',
        shippedDate: '2003-05-13',
        status: 'Shipped',
        comments: null,
        customerNumber: 350
      },
      {
        orderNumber: 10123,
        orderDate: '2003-05-20',
        requiredDate: '2003-05-29',
        shippedDate: '2003-05-22',
        status: 'Shipped',
        comments: null,
        customerNumber: 103
      },
      {
        orderNumber: 10124,
        orderDate: '2003-05-21',
        requiredDate: '2003-05-29',
        shippedDate: '2003-05-25',
        status: 'Shipped',
        comments:
          'Customer very concerned about the exact color of the models. There is high risk that he may dispute the order because there is a slight color mismatch',
        customerNumber: 112
      },
      {
        orderNumber: 10125,
        orderDate: '2003-05-21',
        requiredDate: '2003-05-27',
        shippedDate: '2003-05-24',
        status: 'Shipped',
        comments: null,
        customerNumber: 114
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Orders', null, {});
  }
};
