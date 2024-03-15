"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          title: "Кто? Что? Сколько? И может быть зачем?",
          img: "https://lh3.googleusercontent.com/proxy/vG5WNAnsvWs05CDMA7TjrjjhNlOYGaWhJtvzyaro3Mmw2O-UDIhrsapq72DQ24zqn3cOmfEtX-X7sIoH7akxnLkAFVZveA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title: "Сплетни Эльбруса",
          img: "https://media.istockphoto.com/id/1295114854/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BF%D1%83%D1%81%D1%82%D1%8B%D0%B5-%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D1%8B%D0%B5-%D0%BA%D1%80%D0%B5%D1%81%D0%BB%D0%B0-%D1%82%D0%B5%D0%B0%D1%82%D1%80%D0%B0-%D0%B3%D0%BE%D1%82%D0%BE%D0%B2%D1%8B-%D0%BA-%D0%BF%D0%BE%D0%BA%D0%B0%D0%B7%D1%83.jpg?s=612x612&w=0&k=20&c=BI-hxXNOUEBXHD00XDxGGv6auN8N9RQylsdG1-1h1Kc=",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
