"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Category}) {
      this.belongsTo(Category,{foreignKey: 'categoryId'})
    }
  }
  Question.init(
    {
      answer: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      question: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      img: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      categoryId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Categories",
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
    },
    {
      sequelize,
      modelName: "Question",
    }
  );
  return Question;
};
