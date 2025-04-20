import express from "express";
import { getProgress, updateProgress } from "../controllers/progressController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Progress
 *   description: Прогресс пользователя
 */

/**
 * @swagger
 * /api/progress:
 *   get:
 *     summary: Получить прогресс по всем урокам
 *     tags: [Progress]
 *     responses:
 *       200:
 *         description: Список прогресса
 */

/**
 * @swagger
 * /api/progress/{id}:
 *   put:
 *     summary: Обновить статус прогресса по ID
 *     tags: [Progress]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               completed:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Прогресс обновлён
 */

router.get("/", authMiddleware, getProgress);
router.put("/:id", authMiddleware, updateProgress);

export default router;