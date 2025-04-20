import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const Progress = sequelize.define("Progress", {
  userId: { type: DataTypes.INTEGER },
  lessonId: { type: DataTypes.INTEGER },
  completed: { type: DataTypes.BOOLEAN, defaultValue: false }
});

export default Progress;