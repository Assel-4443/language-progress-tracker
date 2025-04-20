import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { sequelize } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import lessonRoutes from "./routes/lessonRoutes.js";
import wordRoutes from "./routes/wordRoutes.js";
import progressRoutes from "./routes/progressRoutes.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";
import { setupSwagger } from "./docs/swagger.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/lessons", lessonRoutes);
app.use("/api/words", wordRoutes);
app.use("/api/progress", progressRoutes);

setupSwagger(app);

app.use(errorMiddleware);

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await sequelize.authenticate();
  console.log("Database connected");
});