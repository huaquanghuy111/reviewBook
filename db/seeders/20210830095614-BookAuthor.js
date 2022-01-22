'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'BookAuthor',
      [
        {
          BookId: 1,
          AuthorId: 8,
        },
        {
          BookId: 2,
          AuthorId: 1,
        },
        {
          BookId: 3,
          AuthorId: 5,
        },
        {
          BookId: 4,
          AuthorId: 9,
        },
        {
          BookId: 5,
          AuthorId: 6,
        },
        {
          BookId: 6,
          AuthorId: 4,
        },
        {
          BookId: 7,
          AuthorId: 7,
        },
        {
          BookId: 8,
          AuthorId: 3,
        },
        {
          BookId: 9,
          AuthorId: 1,
        },
        {
          BookId: 10,
          AuthorId: 2,
        },
        {
          BookId: 11,
          AuthorId: 10,
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('BookAuthor', null, {})
  },
}
