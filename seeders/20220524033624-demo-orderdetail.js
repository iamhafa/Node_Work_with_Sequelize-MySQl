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
    return queryInterface.bulkInsert('OrderDetails', [
      {
        orderNumber: 10100,
        productCode: 'S18_1749',
        quantityOrdered: 30,
        priceEach: '136.00',
        orderLineNumber: 3
      },
      {
        orderNumber: 10100,
        productCode: 'S18_2248',
        quantityOrdered: 50,
        priceEach: '55.09',
        orderLineNumber: 2
      },
      {
        orderNumber: 10100,
        productCode: 'S18_4409',
        quantityOrdered: 22,
        priceEach: '75.46',
        orderLineNumber: 4
      },
      {
        orderNumber: 10100,
        productCode: 'S24_3969',
        quantityOrdered: 49,
        priceEach: '35.29',
        orderLineNumber: 1
      },
      {
        orderNumber: 10101,
        productCode: 'S18_2325',
        quantityOrdered: 25,
        priceEach: '108.06',
        orderLineNumber: 4
      },
      {
        orderNumber: 10101,
        productCode: 'S18_2795',
        quantityOrdered: 26,
        priceEach: '167.06',
        orderLineNumber: 1
      },
      {
        orderNumber: 10101,
        productCode: 'S24_1937',
        quantityOrdered: 45,
        priceEach: '32.53',
        orderLineNumber: 3
      },
      {
        orderNumber: 10101,
        productCode: 'S24_2022',
        quantityOrdered: 46,
        priceEach: '44.35',
        orderLineNumber: 2
      },
      {
        orderNumber: 10102,
        productCode: 'S18_1342',
        quantityOrdered: 39,
        priceEach: '95.55',
        orderLineNumber: 2
      },
      {
        orderNumber: 10102,
        productCode: 'S18_1367',
        quantityOrdered: 41,
        priceEach: '43.13',
        orderLineNumber: 1
      },
      {
        orderNumber: 10103,
        productCode: 'S10_1949',
        quantityOrdered: 26,
        priceEach: '214.30',
        orderLineNumber: 11
      },
      {
        orderNumber: 10103,
        productCode: 'S10_4962',
        quantityOrdered: 42,
        priceEach: '119.67',
        orderLineNumber: 4
      },
      {
        orderNumber: 10103,
        productCode: 'S12_1666',
        quantityOrdered: 27,
        priceEach: '121.64',
        orderLineNumber: 8
      },
      {
        orderNumber: 10103,
        productCode: 'S18_1097',
        quantityOrdered: 35,
        priceEach: '94.50',
        orderLineNumber: 10
      },
      {
        orderNumber: 10103,
        productCode: 'S18_2432',
        quantityOrdered: 22,
        priceEach: '58.34',
        orderLineNumber: 2
      },
      {
        orderNumber: 10103,
        productCode: 'S18_2949',
        quantityOrdered: 27,
        priceEach: '92.19',
        orderLineNumber: 12
      },
      {
        orderNumber: 10103,
        productCode: 'S18_2957',
        quantityOrdered: 35,
        priceEach: '61.84',
        orderLineNumber: 14
      },
      {
        orderNumber: 10103,
        productCode: 'S18_3136',
        quantityOrdered: 25,
        priceEach: '86.92',
        orderLineNumber: 13
      },
      {
        orderNumber: 10103,
        productCode: 'S18_3320',
        quantityOrdered: 46,
        priceEach: '86.31',
        orderLineNumber: 16
      },
      {
        orderNumber: 10103,
        productCode: 'S18_4600',
        quantityOrdered: 36,
        priceEach: '98.07',
        orderLineNumber: 5
      },
      {
        orderNumber: 10103,
        productCode: 'S18_4668',
        quantityOrdered: 41,
        priceEach: '40.75',
        orderLineNumber: 9
      },
      {
        orderNumber: 10103,
        productCode: 'S24_2300',
        quantityOrdered: 36,
        priceEach: '107.34',
        orderLineNumber: 1
      },
      {
        orderNumber: 10103,
        productCode: 'S24_4258',
        quantityOrdered: 25,
        priceEach: '88.62',
        orderLineNumber: 15
      },
      {
        orderNumber: 10103,
        productCode: 'S32_1268',
        quantityOrdered: 31,
        priceEach: '92.46',
        orderLineNumber: 3
      },
      {
        orderNumber: 10103,
        productCode: 'S32_3522',
        quantityOrdered: 45,
        priceEach: '63.35',
        orderLineNumber: 7
      },
      {
        orderNumber: 10103,
        productCode: 'S700_2824',
        quantityOrdered: 42,
        priceEach: '94.07',
        orderLineNumber: 6
      },
      {
        orderNumber: 10104,
        productCode: 'S12_3148',
        quantityOrdered: 34,
        priceEach: '131.44',
        orderLineNumber: 1
      },
      {
        orderNumber: 10104,
        productCode: 'S12_4473',
        quantityOrdered: 41,
        priceEach: '111.39',
        orderLineNumber: 9
      },
      {
        orderNumber: 10104,
        productCode: 'S18_2238',
        quantityOrdered: 24,
        priceEach: '135.90',
        orderLineNumber: 8
      },
      {
        orderNumber: 10104,
        productCode: 'S18_2319',
        quantityOrdered: 29,
        priceEach: '122.73',
        orderLineNumber: 12
      },
      {
        orderNumber: 10104,
        productCode: 'S18_3232',
        quantityOrdered: 23,
        priceEach: '165.95',
        orderLineNumber: 13
      },
      {
        orderNumber: 10104,
        productCode: 'S18_4027',
        quantityOrdered: 38,
        priceEach: '119.20',
        orderLineNumber: 3
      },
      {
        orderNumber: 10104,
        productCode: 'S24_1444',
        quantityOrdered: 35,
        priceEach: '52.02',
        orderLineNumber: 6
      },
      {
        orderNumber: 10104,
        productCode: 'S24_2840',
        quantityOrdered: 44,
        priceEach: '30.41',
        orderLineNumber: 10
      },
      {
        orderNumber: 10104,
        productCode: 'S24_4048',
        quantityOrdered: 26,
        priceEach: '106.45',
        orderLineNumber: 5
      },
      {
        orderNumber: 10104,
        productCode: 'S32_2509',
        quantityOrdered: 35,
        priceEach: '51.95',
        orderLineNumber: 11
      },
      {
        orderNumber: 10104,
        productCode: 'S32_3207',
        quantityOrdered: 49,
        priceEach: '56.55',
        orderLineNumber: 4
      },
      {
        orderNumber: 10104,
        productCode: 'S50_1392',
        quantityOrdered: 33,
        priceEach: '114.59',
        orderLineNumber: 7
      },
      {
        orderNumber: 10104,
        productCode: 'S50_1514',
        quantityOrdered: 32,
        priceEach: '53.31',
        orderLineNumber: 2
      },
      {
        orderNumber: 10105,
        productCode: 'S10_4757',
        quantityOrdered: 50,
        priceEach: '127.84',
        orderLineNumber: 2
      },
      {
        orderNumber: 10105,
        productCode: 'S12_1108',
        quantityOrdered: 41,
        priceEach: '205.72',
        orderLineNumber: 15
      },
      {
        orderNumber: 10105,
        productCode: 'S12_3891',
        quantityOrdered: 29,
        priceEach: '141.88',
        orderLineNumber: 14
      },
      {
        orderNumber: 10105,
        productCode: 'S18_3140',
        quantityOrdered: 22,
        priceEach: '136.59',
        orderLineNumber: 11
      },
      {
        orderNumber: 10105,
        productCode: 'S18_3259',
        quantityOrdered: 38,
        priceEach: '87.73',
        orderLineNumber: 13
      },
      {
        orderNumber: 10105,
        productCode: 'S18_4522',
        quantityOrdered: 41,
        priceEach: '75.48',
        orderLineNumber: 10
      },
      {
        orderNumber: 10105,
        productCode: 'S24_2011',
        quantityOrdered: 43,
        priceEach: '117.97',
        orderLineNumber: 9
      },
      {
        orderNumber: 10105,
        productCode: 'S24_3151',
        quantityOrdered: 44,
        priceEach: '73.46',
        orderLineNumber: 4
      },
      {
        orderNumber: 10105,
        productCode: 'S24_3816',
        quantityOrdered: 50,
        priceEach: '75.47',
        orderLineNumber: 1
      },
      {
        orderNumber: 10105,
        productCode: 'S700_1138',
        quantityOrdered: 41,
        priceEach: '54.00',
        orderLineNumber: 5
      },
      {
        orderNumber: 10105,
        productCode: 'S700_1938',
        quantityOrdered: 29,
        priceEach: '86.61',
        orderLineNumber: 12
      },
      {
        orderNumber: 10105,
        productCode: 'S700_2610',
        quantityOrdered: 31,
        priceEach: '60.72',
        orderLineNumber: 3
      },
      {
        orderNumber: 10105,
        productCode: 'S700_3505',
        quantityOrdered: 39,
        priceEach: '92.16',
        orderLineNumber: 6
      },
      {
        orderNumber: 10105,
        productCode: 'S700_3962',
        quantityOrdered: 22,
        priceEach: '99.31',
        orderLineNumber: 7
      },
      {
        orderNumber: 10105,
        productCode: 'S72_3212',
        quantityOrdered: 25,
        priceEach: '44.77',
        orderLineNumber: 8
      },
      {
        orderNumber: 10106,
        productCode: 'S18_1662',
        quantityOrdered: 36,
        priceEach: '134.04',
        orderLineNumber: 12
      },
      {
        orderNumber: 10106,
        productCode: 'S18_2581',
        quantityOrdered: 34,
        priceEach: '81.10',
        orderLineNumber: 2
      },
      {
        orderNumber: 10106,
        productCode: 'S18_3029',
        quantityOrdered: 41,
        priceEach: '80.86',
        orderLineNumber: 18
      },
      {
        orderNumber: 10106,
        productCode: 'S18_3856',
        quantityOrdered: 41,
        priceEach: '94.22',
        orderLineNumber: 17
      },
      {
        orderNumber: 10106,
        productCode: 'S24_1785',
        quantityOrdered: 28,
        priceEach: '107.23',
        orderLineNumber: 4
      },
      {
        orderNumber: 10106,
        productCode: 'S24_2841',
        quantityOrdered: 49,
        priceEach: '65.77',
        orderLineNumber: 13
      },
      {
        orderNumber: 10106,
        productCode: 'S24_3420',
        quantityOrdered: 31,
        priceEach: '55.89',
        orderLineNumber: 14
      },
      {
        orderNumber: 10106,
        productCode: 'S24_3949',
        quantityOrdered: 50,
        priceEach: '55.96',
        orderLineNumber: 11
      },
      {
        orderNumber: 10106,
        productCode: 'S24_4278',
        quantityOrdered: 26,
        priceEach: '71.00',
        orderLineNumber: 3
      },
      {
        orderNumber: 10106,
        productCode: 'S32_4289',
        quantityOrdered: 33,
        priceEach: '65.35',
        orderLineNumber: 5
      },
      {
        orderNumber: 10106,
        productCode: 'S50_1341',
        quantityOrdered: 39,
        priceEach: '35.78',
        orderLineNumber: 6
      },
      {
        orderNumber: 10106,
        productCode: 'S700_1691',
        quantityOrdered: 31,
        priceEach: '91.34',
        orderLineNumber: 7
      },
      {
        orderNumber: 10106,
        productCode: 'S700_2047',
        quantityOrdered: 30,
        priceEach: '85.09',
        orderLineNumber: 16
      },
      {
        orderNumber: 10106,
        productCode: 'S700_2466',
        quantityOrdered: 34,
        priceEach: '99.72',
        orderLineNumber: 9
      },
      {
        orderNumber: 10106,
        productCode: 'S700_2834',
        quantityOrdered: 32,
        priceEach: '113.90',
        orderLineNumber: 1
      },
      {
        orderNumber: 10106,
        productCode: 'S700_3167',
        quantityOrdered: 44,
        priceEach: '76.00',
        orderLineNumber: 8
      },
      {
        orderNumber: 10106,
        productCode: 'S700_4002',
        quantityOrdered: 48,
        priceEach: '70.33',
        orderLineNumber: 10
      },
      {
        orderNumber: 10106,
        productCode: 'S72_1253',
        quantityOrdered: 48,
        priceEach: '43.70',
        orderLineNumber: 15
      },
      {
        orderNumber: 10107,
        productCode: 'S10_1678',
        quantityOrdered: 30,
        priceEach: '81.35',
        orderLineNumber: 2
      },
      {
        orderNumber: 10107,
        productCode: 'S10_2016',
        quantityOrdered: 39,
        priceEach: '105.86',
        orderLineNumber: 5
      },
      {
        orderNumber: 10107,
        productCode: 'S10_4698',
        quantityOrdered: 27,
        priceEach: '172.36',
        orderLineNumber: 4
      },
      {
        orderNumber: 10107,
        productCode: 'S12_2823',
        quantityOrdered: 21,
        priceEach: '122.00',
        orderLineNumber: 1
      },
      {
        orderNumber: 10107,
        productCode: 'S18_2625',
        quantityOrdered: 29,
        priceEach: '52.70',
        orderLineNumber: 6
      },
      {
        orderNumber: 10107,
        productCode: 'S24_1578',
        quantityOrdered: 25,
        priceEach: '96.92',
        orderLineNumber: 3
      },
      {
        orderNumber: 10107,
        productCode: 'S24_2000',
        quantityOrdered: 38,
        priceEach: '73.12',
        orderLineNumber: 7
      },
      {
        orderNumber: 10107,
        productCode: 'S32_1374',
        quantityOrdered: 20,
        priceEach: '88.90',
        orderLineNumber: 8
      },
      {
        orderNumber: 10108,
        productCode: 'S12_1099',
        quantityOrdered: 33,
        priceEach: '165.38',
        orderLineNumber: 6
      },
      {
        orderNumber: 10108,
        productCode: 'S12_3380',
        quantityOrdered: 45,
        priceEach: '96.30',
        orderLineNumber: 4
      },
      {
        orderNumber: 10108,
        productCode: 'S12_3990',
        quantityOrdered: 39,
        priceEach: '75.81',
        orderLineNumber: 7
      },
      {
        orderNumber: 10108,
        productCode: 'S12_4675',
        quantityOrdered: 36,
        priceEach: '107.10',
        orderLineNumber: 3
      },
      {
        orderNumber: 10108,
        productCode: 'S18_1889',
        quantityOrdered: 38,
        priceEach: '67.76',
        orderLineNumber: 2
      },
      {
        orderNumber: 10108,
        productCode: 'S18_3278',
        quantityOrdered: 26,
        priceEach: '73.17',
        orderLineNumber: 9
      },
      {
        orderNumber: 10108,
        productCode: 'S18_3482',
        quantityOrdered: 29,
        priceEach: '132.29',
        orderLineNumber: 8
      },
      {
        orderNumber: 10108,
        productCode: 'S18_3782',
        quantityOrdered: 43,
        priceEach: '52.84',
        orderLineNumber: 12
      },
      {
        orderNumber: 10108,
        productCode: 'S18_4721',
        quantityOrdered: 44,
        priceEach: '139.87',
        orderLineNumber: 11
      },
      {
        orderNumber: 10108,
        productCode: 'S24_2360',
        quantityOrdered: 35,
        priceEach: '64.41',
        orderLineNumber: 15
      },
      {
        orderNumber: 10108,
        productCode: 'S24_3371',
        quantityOrdered: 30,
        priceEach: '60.01',
        orderLineNumber: 5
      },
      {
        orderNumber: 10108,
        productCode: 'S24_3856',
        quantityOrdered: 40,
        priceEach: '132.00',
        orderLineNumber: 1
      },
      {
        orderNumber: 10108,
        productCode: 'S24_4620',
        quantityOrdered: 31,
        priceEach: '67.10',
        orderLineNumber: 10
      },
      {
        orderNumber: 10108,
        productCode: 'S32_2206',
        quantityOrdered: 27,
        priceEach: '36.21',
        orderLineNumber: 13
      },
      {
        orderNumber: 10108,
        productCode: 'S32_4485',
        quantityOrdered: 31,
        priceEach: '87.76',
        orderLineNumber: 16
      },
      {
        orderNumber: 10108,
        productCode: 'S50_4713',
        quantityOrdered: 34,
        priceEach: '74.85',
        orderLineNumber: 14
      },
      {
        orderNumber: 10109,
        productCode: 'S18_1129',
        quantityOrdered: 26,
        priceEach: '117.48',
        orderLineNumber: 4
      },
      {
        orderNumber: 10109,
        productCode: 'S18_1984',
        quantityOrdered: 38,
        priceEach: '137.98',
        orderLineNumber: 3
      },
      {
        orderNumber: 10109,
        productCode: 'S18_2870',
        quantityOrdered: 26,
        priceEach: '126.72',
        orderLineNumber: 1
      },
      {
        orderNumber: 10109,
        productCode: 'S18_3232',
        quantityOrdered: 46,
        priceEach: '160.87',
        orderLineNumber: 5
      },
      {
        orderNumber: 10109,
        productCode: 'S18_3685',
        quantityOrdered: 47,
        priceEach: '125.74',
        orderLineNumber: 2
      },
      {
        orderNumber: 10109,
        productCode: 'S24_2972',
        quantityOrdered: 29,
        priceEach: '32.10',
        orderLineNumber: 6
      },
      {
        orderNumber: 10110,
        productCode: 'S18_1589',
        quantityOrdered: 37,
        priceEach: '118.22',
        orderLineNumber: 16
      },
      {
        orderNumber: 10110,
        productCode: 'S18_1749',
        quantityOrdered: 42,
        priceEach: '153.00',
        orderLineNumber: 7
      },
      {
        orderNumber: 10110,
        productCode: 'S18_2248',
        quantityOrdered: 32,
        priceEach: '51.46',
        orderLineNumber: 6
      },
      {
        orderNumber: 10110,
        productCode: 'S18_2325',
        quantityOrdered: 33,
        priceEach: '115.69',
        orderLineNumber: 4
      },
      {
        orderNumber: 10110,
        productCode: 'S18_2795',
        quantityOrdered: 31,
        priceEach: '163.69',
        orderLineNumber: 1
      },
      {
        orderNumber: 10110,
        productCode: 'S18_4409',
        quantityOrdered: 28,
        priceEach: '81.91',
        orderLineNumber: 8
      },
      {
        orderNumber: 10110,
        productCode: 'S18_4933',
        quantityOrdered: 42,
        priceEach: '62.00',
        orderLineNumber: 9
      },
      {
        orderNumber: 10110,
        productCode: 'S24_1046',
        quantityOrdered: 36,
        priceEach: '72.02',
        orderLineNumber: 13
      },
      {
        orderNumber: 10110,
        productCode: 'S24_1628',
        quantityOrdered: 29,
        priceEach: '43.27',
        orderLineNumber: 15
      },
      {
        orderNumber: 10110,
        productCode: 'S24_1937',
        quantityOrdered: 20,
        priceEach: '28.88',
        orderLineNumber: 3
      },
      {
        orderNumber: 10110,
        productCode: 'S24_2022',
        quantityOrdered: 39,
        priceEach: '40.77',
        orderLineNumber: 2
      },
      {
        orderNumber: 10110,
        productCode: 'S24_2766',
        quantityOrdered: 43,
        priceEach: '82.69',
        orderLineNumber: 11
      },
      {
        orderNumber: 10110,
        productCode: 'S24_2887',
        quantityOrdered: 46,
        priceEach: '112.74',
        orderLineNumber: 10
      },
      {
        orderNumber: 10110,
        productCode: 'S24_3191',
        quantityOrdered: 27,
        priceEach: '80.47',
        orderLineNumber: 12
      },
      {
        orderNumber: 10110,
        productCode: 'S24_3432',
        quantityOrdered: 37,
        priceEach: '96.37',
        orderLineNumber: 14
      },
      {
        orderNumber: 10110,
        productCode: 'S24_3969',
        quantityOrdered: 48,
        priceEach: '35.29',
        orderLineNumber: 5
      },
      {
        orderNumber: 10111,
        productCode: 'S18_1342',
        quantityOrdered: 33,
        priceEach: '87.33',
        orderLineNumber: 6
      },
      {
        orderNumber: 10111,
        productCode: 'S18_1367',
        quantityOrdered: 48,
        priceEach: '48.52',
        orderLineNumber: 5
      },
      {
        orderNumber: 10111,
        productCode: 'S18_2957',
        quantityOrdered: 28,
        priceEach: '53.09',
        orderLineNumber: 2
      },
      {
        orderNumber: 10111,
        productCode: 'S18_3136',
        quantityOrdered: 43,
        priceEach: '94.25',
        orderLineNumber: 1
      },
      {
        orderNumber: 10111,
        productCode: 'S18_3320',
        quantityOrdered: 39,
        priceEach: '91.27',
        orderLineNumber: 4
      },
      {
        orderNumber: 10111,
        productCode: 'S24_4258',
        quantityOrdered: 26,
        priceEach: '85.70',
        orderLineNumber: 3
      },
      {
        orderNumber: 10112,
        productCode: 'S10_1949',
        quantityOrdered: 29,
        priceEach: '197.16',
        orderLineNumber: 1
      },
      {
        orderNumber: 10112,
        productCode: 'S18_2949',
        quantityOrdered: 23,
        priceEach: '85.10',
        orderLineNumber: 2
      },
      {
        orderNumber: 10113,
        productCode: 'S12_1666',
        quantityOrdered: 21,
        priceEach: '121.64',
        orderLineNumber: 2
      },
      {
        orderNumber: 10113,
        productCode: 'S18_1097',
        quantityOrdered: 49,
        priceEach: '101.50',
        orderLineNumber: 4
      },
      {
        orderNumber: 10113,
        productCode: 'S18_4668',
        quantityOrdered: 50,
        priceEach: '43.27',
        orderLineNumber: 3
      },
      {
        orderNumber: 10113,
        productCode: 'S32_3522',
        quantityOrdered: 23,
        priceEach: '58.82',
        orderLineNumber: 1
      },
      {
        orderNumber: 10114,
        productCode: 'S10_4962',
        quantityOrdered: 31,
        priceEach: '128.53',
        orderLineNumber: 8
      },
      {
        orderNumber: 10114,
        productCode: 'S18_2319',
        quantityOrdered: 39,
        priceEach: '106.78',
        orderLineNumber: 3
      },
      {
        orderNumber: 10114,
        productCode: 'S18_2432',
        quantityOrdered: 45,
        priceEach: '53.48',
        orderLineNumber: 6
      },
      {
        orderNumber: 10114,
        productCode: 'S18_3232',
        quantityOrdered: 48,
        priceEach: '169.34',
        orderLineNumber: 4
      },
      {
        orderNumber: 10114,
        productCode: 'S18_4600',
        quantityOrdered: 41,
        priceEach: '105.34',
        orderLineNumber: 9
      },
      {
        orderNumber: 10114,
        productCode: 'S24_2300',
        quantityOrdered: 21,
        priceEach: '102.23',
        orderLineNumber: 5
      },
      {
        orderNumber: 10114,
        productCode: 'S24_2840',
        quantityOrdered: 24,
        priceEach: '28.64',
        orderLineNumber: 1
      },
      {
        orderNumber: 10114,
        productCode: 'S32_1268',
        quantityOrdered: 32,
        priceEach: '88.61',
        orderLineNumber: 7
      },
      {
        orderNumber: 10114,
        productCode: 'S32_2509',
        quantityOrdered: 28,
        priceEach: '43.83',
        orderLineNumber: 2
      },
      {
        orderNumber: 10114,
        productCode: 'S700_2824',
        quantityOrdered: 42,
        priceEach: '82.94',
        orderLineNumber: 10
      },
      {
        orderNumber: 10115,
        productCode: 'S12_4473',
        quantityOrdered: 46,
        priceEach: '111.39',
        orderLineNumber: 5
      },
      {
        orderNumber: 10115,
        productCode: 'S18_2238',
        quantityOrdered: 46,
        priceEach: '140.81',
        orderLineNumber: 4
      },
      {
        orderNumber: 10115,
        productCode: 'S24_1444',
        quantityOrdered: 47,
        priceEach: '56.64',
        orderLineNumber: 2
      },
      {
        orderNumber: 10115,
        productCode: 'S24_4048',
        quantityOrdered: 44,
        priceEach: '106.45',
        orderLineNumber: 1
      },
      {
        orderNumber: 10115,
        productCode: 'S50_1392',
        quantityOrdered: 27,
        priceEach: '100.70',
        orderLineNumber: 3
      },
      {
        orderNumber: 10116,
        productCode: 'S32_3207',
        quantityOrdered: 27,
        priceEach: '60.28',
        orderLineNumber: 1
      },
      {
        orderNumber: 10117,
        productCode: 'S12_1108',
        quantityOrdered: 33,
        priceEach: '195.33',
        orderLineNumber: 9
      },
      {
        orderNumber: 10117,
        productCode: 'S12_3148',
        quantityOrdered: 43,
        priceEach: '148.06',
        orderLineNumber: 10
      },
      {
        orderNumber: 10117,
        productCode: 'S12_3891',
        quantityOrdered: 39,
        priceEach: '173.02',
        orderLineNumber: 8
      },
      {
        orderNumber: 10117,
        productCode: 'S18_3140',
        quantityOrdered: 26,
        priceEach: '121.57',
        orderLineNumber: 5
      },
      {
        orderNumber: 10117,
        productCode: 'S18_3259',
        quantityOrdered: 21,
        priceEach: '81.68',
        orderLineNumber: 7
      },
      {
        orderNumber: 10117,
        productCode: 'S18_4027',
        quantityOrdered: 22,
        priceEach: '122.08',
        orderLineNumber: 12
      },
      {
        orderNumber: 10117,
        productCode: 'S18_4522',
        quantityOrdered: 23,
        priceEach: '73.73',
        orderLineNumber: 4
      },
      {
        orderNumber: 10117,
        productCode: 'S24_2011',
        quantityOrdered: 41,
        priceEach: '119.20',
        orderLineNumber: 3
      },
      {
        orderNumber: 10117,
        productCode: 'S50_1514',
        quantityOrdered: 21,
        priceEach: '55.65',
        orderLineNumber: 11
      },
      {
        orderNumber: 10117,
        productCode: 'S700_1938',
        quantityOrdered: 38,
        priceEach: '75.35',
        orderLineNumber: 6
      },
      {
        orderNumber: 10117,
        productCode: 'S700_3962',
        quantityOrdered: 45,
        priceEach: '89.38',
        orderLineNumber: 1
      },
      {
        orderNumber: 10117,
        productCode: 'S72_3212',
        quantityOrdered: 50,
        priceEach: '52.42',
        orderLineNumber: 2
      },
      {
        orderNumber: 10118,
        productCode: 'S700_3505',
        quantityOrdered: 36,
        priceEach: '86.15',
        orderLineNumber: 1
      },
      {
        orderNumber: 10119,
        productCode: 'S10_4757',
        quantityOrdered: 46,
        priceEach: '112.88',
        orderLineNumber: 11
      },
      {
        orderNumber: 10119,
        productCode: 'S18_1662',
        quantityOrdered: 43,
        priceEach: '151.38',
        orderLineNumber: 3
      },
      {
        orderNumber: 10119,
        productCode: 'S18_3029',
        quantityOrdered: 21,
        priceEach: '74.84',
        orderLineNumber: 9
      },
      {
        orderNumber: 10119,
        productCode: 'S18_3856',
        quantityOrdered: 27,
        priceEach: '95.28',
        orderLineNumber: 8
      },
      {
        orderNumber: 10119,
        productCode: 'S24_2841',
        quantityOrdered: 41,
        priceEach: '64.40',
        orderLineNumber: 4
      },
      {
        orderNumber: 10119,
        productCode: 'S24_3151',
        quantityOrdered: 35,
        priceEach: '72.58',
        orderLineNumber: 13
      },
      {
        orderNumber: 10119,
        productCode: 'S24_3420',
        quantityOrdered: 20,
        priceEach: '63.12',
        orderLineNumber: 5
      },
      {
        orderNumber: 10119,
        productCode: 'S24_3816',
        quantityOrdered: 35,
        priceEach: '82.18',
        orderLineNumber: 10
      },
      {
        orderNumber: 10119,
        productCode: 'S24_3949',
        quantityOrdered: 28,
        priceEach: '62.10',
        orderLineNumber: 2
      },
      {
        orderNumber: 10119,
        productCode: 'S700_1138',
        quantityOrdered: 25,
        priceEach: '57.34',
        orderLineNumber: 14
      },
      {
        orderNumber: 10119,
        productCode: 'S700_2047',
        quantityOrdered: 29,
        priceEach: '74.23',
        orderLineNumber: 7
      },
      {
        orderNumber: 10119,
        productCode: 'S700_2610',
        quantityOrdered: 38,
        priceEach: '67.22',
        orderLineNumber: 12
      },
      {
        orderNumber: 10119,
        productCode: 'S700_4002',
        quantityOrdered: 26,
        priceEach: '63.67',
        orderLineNumber: 1
      },
      {
        orderNumber: 10119,
        productCode: 'S72_1253',
        quantityOrdered: 28,
        priceEach: '40.22',
        orderLineNumber: 6
      },
      {
        orderNumber: 10120,
        productCode: 'S10_2016',
        quantityOrdered: 29,
        priceEach: '118.94',
        orderLineNumber: 3
      },
      {
        orderNumber: 10120,
        productCode: 'S10_4698',
        quantityOrdered: 46,
        priceEach: '158.80',
        orderLineNumber: 2
      },
      {
        orderNumber: 10120,
        productCode: 'S18_2581',
        quantityOrdered: 29,
        priceEach: '82.79',
        orderLineNumber: 8
      },
      {
        orderNumber: 10120,
        productCode: 'S18_2625',
        quantityOrdered: 46,
        priceEach: '57.54',
        orderLineNumber: 4
      },
      {
        orderNumber: 10120,
        productCode: 'S24_1578',
        quantityOrdered: 35,
        priceEach: '110.45',
        orderLineNumber: 1
      },
      {
        orderNumber: 10120,
        productCode: 'S24_1785',
        quantityOrdered: 39,
        priceEach: '93.01',
        orderLineNumber: 10
      },
      {
        orderNumber: 10120,
        productCode: 'S24_2000',
        quantityOrdered: 34,
        priceEach: '72.36',
        orderLineNumber: 5
      },
      {
        orderNumber: 10120,
        productCode: 'S24_4278',
        quantityOrdered: 29,
        priceEach: '71.73',
        orderLineNumber: 9
      },
      {
        orderNumber: 10120,
        productCode: 'S32_1374',
        quantityOrdered: 22,
        priceEach: '94.90',
        orderLineNumber: 6
      },
      {
        orderNumber: 10120,
        productCode: 'S32_4289',
        quantityOrdered: 29,
        priceEach: '68.79',
        orderLineNumber: 11
      },
      {
        orderNumber: 10120,
        productCode: 'S50_1341',
        quantityOrdered: 49,
        priceEach: '41.46',
        orderLineNumber: 12
      },
      {
        orderNumber: 10120,
        productCode: 'S700_1691',
        quantityOrdered: 47,
        priceEach: '91.34',
        orderLineNumber: 13
      },
      {
        orderNumber: 10120,
        productCode: 'S700_2466',
        quantityOrdered: 24,
        priceEach: '81.77',
        orderLineNumber: 15
      },
      {
        orderNumber: 10120,
        productCode: 'S700_2834',
        quantityOrdered: 24,
        priceEach: '106.79',
        orderLineNumber: 7
      },
      {
        orderNumber: 10120,
        productCode: 'S700_3167',
        quantityOrdered: 43,
        priceEach: '72.00',
        orderLineNumber: 14
      },
      {
        orderNumber: 10121,
        productCode: 'S10_1678',
        quantityOrdered: 34,
        priceEach: '86.13',
        orderLineNumber: 5
      },
      {
        orderNumber: 10121,
        productCode: 'S12_2823',
        quantityOrdered: 50,
        priceEach: '126.52',
        orderLineNumber: 4
      },
      {
        orderNumber: 10121,
        productCode: 'S24_2360',
        quantityOrdered: 32,
        priceEach: '58.18',
        orderLineNumber: 2
      },
      {
        orderNumber: 10121,
        productCode: 'S32_4485',
        quantityOrdered: 25,
        priceEach: '95.93',
        orderLineNumber: 3
      },
      {
        orderNumber: 10121,
        productCode: 'S50_4713',
        quantityOrdered: 44,
        priceEach: '72.41',
        orderLineNumber: 1
      },
      {
        orderNumber: 10122,
        productCode: 'S12_1099',
        quantityOrdered: 42,
        priceEach: '155.66',
        orderLineNumber: 10
      },
      {
        orderNumber: 10122,
        productCode: 'S12_3380',
        quantityOrdered: 37,
        priceEach: '113.92',
        orderLineNumber: 8
      },
      {
        orderNumber: 10122,
        productCode: 'S12_3990',
        quantityOrdered: 32,
        priceEach: '65.44',
        orderLineNumber: 11
      },
      {
        orderNumber: 10122,
        productCode: 'S12_4675',
        quantityOrdered: 20,
        priceEach: '104.80',
        orderLineNumber: 7
      },
      {
        orderNumber: 10122,
        productCode: 'S18_1129',
        quantityOrdered: 34,
        priceEach: '114.65',
        orderLineNumber: 2
      },
      {
        orderNumber: 10122,
        productCode: 'S18_1889',
        quantityOrdered: 43,
        priceEach: '62.37',
        orderLineNumber: 6
      },
      {
        orderNumber: 10122,
        productCode: 'S18_1984',
        quantityOrdered: 31,
        priceEach: '113.80',
        orderLineNumber: 1
      },
      {
        orderNumber: 10122,
        productCode: 'S18_3232',
        quantityOrdered: 25,
        priceEach: '137.17',
        orderLineNumber: 3
      },
      {
        orderNumber: 10122,
        productCode: 'S18_3278',
        quantityOrdered: 21,
        priceEach: '69.15',
        orderLineNumber: 13
      },
      {
        orderNumber: 10122,
        productCode: 'S18_3482',
        quantityOrdered: 21,
        priceEach: '133.76',
        orderLineNumber: 12
      },
      {
        orderNumber: 10122,
        productCode: 'S18_3782',
        quantityOrdered: 35,
        priceEach: '59.06',
        orderLineNumber: 16
      },
      {
        orderNumber: 10122,
        productCode: 'S18_4721',
        quantityOrdered: 28,
        priceEach: '145.82',
        orderLineNumber: 15
      },
      {
        orderNumber: 10122,
        productCode: 'S24_2972',
        quantityOrdered: 39,
        priceEach: '34.74',
        orderLineNumber: 4
      },
      {
        orderNumber: 10122,
        productCode: 'S24_3371',
        quantityOrdered: 34,
        priceEach: '50.82',
        orderLineNumber: 9
      },
      {
        orderNumber: 10122,
        productCode: 'S24_3856',
        quantityOrdered: 43,
        priceEach: '136.22',
        orderLineNumber: 5
      },
      {
        orderNumber: 10122,
        productCode: 'S24_4620',
        quantityOrdered: 29,
        priceEach: '67.10',
        orderLineNumber: 14
      },
      {
        orderNumber: 10122,
        productCode: 'S32_2206',
        quantityOrdered: 31,
        priceEach: '33.79',
        orderLineNumber: 17
      },
      {
        orderNumber: 10123,
        productCode: 'S18_1589',
        quantityOrdered: 26,
        priceEach: '120.71',
        orderLineNumber: 2
      },
      {
        orderNumber: 10123,
        productCode: 'S18_2870',
        quantityOrdered: 46,
        priceEach: '114.84',
        orderLineNumber: 3
      },
      {
        orderNumber: 10123,
        productCode: 'S18_3685',
        quantityOrdered: 34,
        priceEach: '117.26',
        orderLineNumber: 4
      },
      {
        orderNumber: 10123,
        productCode: 'S24_1628',
        quantityOrdered: 50,
        priceEach: '43.27',
        orderLineNumber: 1
      },
      {
        orderNumber: 10124,
        productCode: 'S18_1749',
        quantityOrdered: 21,
        priceEach: '153.00',
        orderLineNumber: 6
      },
      {
        orderNumber: 10124,
        productCode: 'S18_2248',
        quantityOrdered: 42,
        priceEach: '58.12',
        orderLineNumber: 5
      },
      {
        orderNumber: 10124,
        productCode: 'S18_2325',
        quantityOrdered: 42,
        priceEach: '111.87',
        orderLineNumber: 3
      },
      {
        orderNumber: 10124,
        productCode: 'S18_4409',
        quantityOrdered: 36,
        priceEach: '75.46',
        orderLineNumber: 7
      },
      {
        orderNumber: 10124,
        productCode: 'S18_4933',
        quantityOrdered: 23,
        priceEach: '66.28',
        orderLineNumber: 8
      },
      {
        orderNumber: 10124,
        productCode: 'S24_1046',
        quantityOrdered: 22,
        priceEach: '62.47',
        orderLineNumber: 12
      },
      {
        orderNumber: 10124,
        productCode: 'S24_1937',
        quantityOrdered: 45,
        priceEach: '30.53',
        orderLineNumber: 2
      },
      {
        orderNumber: 10124,
        productCode: 'S24_2022',
        quantityOrdered: 22,
        priceEach: '36.29',
        orderLineNumber: 1
      },
      {
        orderNumber: 10124,
        productCode: 'S24_2766',
        quantityOrdered: 32,
        priceEach: '74.51',
        orderLineNumber: 10
      },
      {
        orderNumber: 10124,
        productCode: 'S24_2887',
        quantityOrdered: 25,
        priceEach: '93.95',
        orderLineNumber: 9
      },
      {
        orderNumber: 10124,
        productCode: 'S24_3191',
        quantityOrdered: 49,
        priceEach: '76.19',
        orderLineNumber: 11
      },
      {
        orderNumber: 10124,
        productCode: 'S24_3432',
        quantityOrdered: 43,
        priceEach: '101.73',
        orderLineNumber: 13
      },
      {
        orderNumber: 10124,
        productCode: 'S24_3969',
        quantityOrdered: 46,
        priceEach: '36.11',
        orderLineNumber: 4
      },
      {
        orderNumber: 10125,
        productCode: 'S18_1342',
        quantityOrdered: 32,
        priceEach: '89.38',
        orderLineNumber: 1
      },
      {
        orderNumber: 10125,
        productCode: 'S18_2795',
        quantityOrdered: 34,
        priceEach: '138.38',
        orderLineNumber: 2
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
    return queryInterface.bulkDelete('OrderDetails', null, {});
  }
};
