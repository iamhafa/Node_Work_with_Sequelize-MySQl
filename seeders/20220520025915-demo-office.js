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
    return queryInterface.bulkInsert('Offices', [
      {
        officeCode: '1',
        city: 'San Francisco',
        phone: '+1 650 219 4782',
        addressLine1: '100 Market Street',
        addressLine2: 'Suite 300',
        state: 'CA',
        country: 'USA',
        postalCode: '94080',
        territory: 'NA'
      },
      {
        officeCode: '2',
        city: 'Boston',
        phone: '+1 215 837 0825',
        addressLine1: '1550 Court Place',
        addressLine2: 'Suite 102',
        state: 'MA',
        country: 'USA',
        postalCode: '02107',
        territory: 'NA'
      },
      {
        officeCode: '3',
        city: 'NYC',
        phone: '+1 212 555 3000',
        addressLine1: '523 East 53rd Street',
        addressLine2: 'apt. 5A',
        state: 'NY',
        country: 'USA',
        postalCode: '10022',
        territory: 'NA'
      },
      {
        officeCode: '4',
        city: 'Paris',
        phone: '+33 14 723 4404',
        addressLine1: "43 Rue Jouffroy D'abbans",
        addressLine2: null,
        state: null,
        country: 'France',
        postalCode: '75017',
        territory: 'EMEA'
      },
      {
        officeCode: '5',
        city: 'Tokyo',
        phone: '+81 33 224 5000',
        addressLine1: '4-1 Kioicho',
        addressLine2: null,
        state: 'Chiyoda-Ku',
        country: 'Japan',
        postalCode: '102-8578',
        territory: 'Japan'
      },
      {
        officeCode: '6',
        city: 'Sydney',
        phone: '+61 2 9264 2451',
        addressLine1: '5-11 Wentworth Avenue',
        addressLine2: 'Floor #2',
        state: null,
        country: 'Australia',
        postalCode: 'NSW 2010',
        territory: 'APAC'
      },
      {
        officeCode: '7',
        city: 'London',
        phone: '+44 20 7877 2041',
        addressLine1: '25 Old Broad Street',
        addressLine2: 'Level 7',
        state: null,
        country: 'UK',
        postalCode: 'EC2N 1HN',
        territory: 'EMEA'
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
    return queryInterface.bulkDelete('Offices', null, {});
  }
};
