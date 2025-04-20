import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const Word = sequelize.define("Word", {
  text: { type: DataTypes.STRING, allowNull: false },
  translation: { type: DataTypes.STRING },
  lessonId: { type: DataTypes.INTEGER }
});

export default Word;