'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Authors',
      [
        {
          id: 1,
          name: 'Tô Hoài',
        },
        {
          id: 2,
          name: 'Nam Cao',
        },
        {
          id: 3,
          name: 'Kim Lân',
        },
        {
          id: 4,
          name: 'Dale Canegie',
        },
        {
          id: 5,
          name: 'Napoleon Hill',
        },
        {
          id: 6,
          name: 'Phạm Văn Ất',
        },
        {
          id: 7,
          name: 'Lam Lam',
        },
        {
          id: 8,
          name: 'Nguyễn Nhật Ánh',
        },
        {
          id: 9,
          name: 'Brian Tracy',
        },
        {
          id: 10,
          name: 'Robert Kyosaky',
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Authors', null, {})
  },
}
