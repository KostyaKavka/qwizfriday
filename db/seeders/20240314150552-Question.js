"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Questions",
      [
        {
          answer: "5",
          question: "сколько пальцев на руке?",
          img: "https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1710288000&semt=ais",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          answer: "5",
          question: "сколько пальцев на руке?",
          img: "https://i.pinimg.com/236x/24/15/21/24152197af38deb718eb730992d441d0.jpg",
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Questions", null, {});
  },
};
