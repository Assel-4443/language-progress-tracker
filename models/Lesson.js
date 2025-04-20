import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const Lesson = sequelize.define("Lesson", {
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT }
});

export default Lesson;