import express from "express";
import { getLessons, createLesson, updateLesson, deleteLesson } from "../controllers/lessonController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Lessons
 *   description: Управление уроками
 */

/**
 * @swagger
 * /api/lessons:
 *   get:
 *     summary: Получить список всех уроков
 *     tags: [Lessons]
 *     responses:
 *       200:
 *         description: Список уроков
 */

/**
 * @swagger
 * /api/lessons:
 *   post:
 *     summary: Создать новый урок
 *     tags: [Lessons]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Урок создан
 */

/**
 * @swagger
 * /api/lessons/{id}:
 *   put:
 *     summary: Обновить урок по ID
 *     tags: [Lessons]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Урок обновлён
 */

/**
 * @swagger
 * /api/lessons/{id}:
 *   delete:
 *     summary: Удалить урок по ID
 *     tags: [Lessons]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Урок удалён
 */

router.get("/", authMiddleware, getLessons);
router.post("/", authMiddleware, createLesson);
router.put("/:id", authMiddleware, updateLesson);
router.delete("/:id", authMiddleware, deleteLesson);

export default router;