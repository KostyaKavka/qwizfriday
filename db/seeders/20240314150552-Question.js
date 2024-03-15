"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Questions",
      [
        {
          answer: "Ваня",
          question: "Кто это у нас такой в тапках?",
          img: "",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          answer: "Алины",
          question: "Чьё это фотогениченое ухо?",
          img: "",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },


        {
          answer: "В левом",
          question: "Отгадайте в каком лифте этот врасавчик сделал фото?",
          img: "",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },


        {
          answer: "В левом",
          question: "В каком холодильнике столько пакетов?",
          img: "",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },


        {
          answer: "Камил",
          question: "Чья шикарная шевелюра на фото?",
          img: "",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          answer: "В левом",
          question: "Отгадайте в каком лифте этот врасавчик сделал фото?",
          img: "",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },


        {
          answer: "В левом",
          question: "В каком холодильнике столько пакетов?",
          img: "",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },


        {
          answer: "Камил",
          question: "Чья шикарная шевелюра на фото?",
          img: "",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          answer: "Правда",
          question: "Правда что один из женихов является сыном Лианы",
          img: "",
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        
        {
          answer: "Правда",
          question: "Правда что Даня (СасэоБамбэо) является крашем Димы и мы это не осуждаем?  ",
          img: "",
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        
        {
          answer: "Факт",
          question: "Правда что Маша со 2 фазы осталась на повтор только ради Саши?",
          img: "",
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        
        {
          answer: "5",
          question: "Правда что приход случается под конец второй фазы?",
          img: "",
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        
        {
          answer: "Пошуршим",
          question: "Правда что мы секта?",
          img: "",
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
