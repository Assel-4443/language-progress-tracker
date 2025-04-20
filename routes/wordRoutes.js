import express from "express";
import { getWords, createWord, updateWord, deleteWord } from "../controllers/wordController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Words
 *   description: Управление словами
 */

/**
 * @swagger
 * /api/words:
 *   get:
 *     summary: Получить список всех слов
 *     tags: [Words]
 *     responses:
 *       200:
 *         description: Список слов
 */

/**
 * @swagger
 * /api/words:
 *   post:
 *     summary: Создать новое слово
 *     tags: [Words]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *               translation:
 *                 type: string
 *               lessonId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Слово создано
 */

/**
 * @swagger
 * /api/words/{id}:
 *   put:
 *     summary: Обновить слово по ID
 *     tags: [Words]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Слово обновлено
 */

/**
 * @swagger
 * /api/words/{id}:
 *   delete:
 *     summary: Удалить слово по ID
 *     tags: [Words]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Слово удалено
 */

router.get("/", authMiddleware, getWords);
router.post("/", authMiddleware, createWord);
router.put("/:id", authMiddleware, updateWord);
router.delete("/:id", authMiddleware, deleteWord);

export default router;