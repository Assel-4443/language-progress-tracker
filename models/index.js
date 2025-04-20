import User from "./User.js";
import Lesson from "./Lesson.js";
import Word from "./Word.js";
import Progress from "./Progress.js";

// Associations
Lesson.hasMany(Word, { foreignKey: "lessonId" });
Word.belongsTo(Lesson, { foreignKey: "lessonId" });

User.belongsToMany(Lesson, { through: Progress, foreignKey: "userId" });
Lesson.belongsToMany(User, { through: Progress, foreignKey: "lessonId" });

export { User, Lesson, Word, Progress };