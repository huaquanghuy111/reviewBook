'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Kinds',
      [
        {
          id: 1,
          title: 'Kinh doanh',
        },
        {
          id: 2,
          title: 'Văn học',
        },
        {
          id: 3,
          title: 'Kĩ năng sống',
        },
        {
          id: 4,
          title: 'Ngôn tình',
        },
        {
          id: 5,
          title: 'Học thuật',
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Kinds', null, {})
  },
}
