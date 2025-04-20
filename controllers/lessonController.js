import { Lesson } from "../models/index.js";

export const getLessons = async (req, res) => {
  const lessons = await Lesson.findAll();
  res.json(lessons);
};

export const createLesson = async (req, res) => {
  const { title, description } = req.body;
  const lesson = await Lesson.create({ title, description });
  res.status(201).json(lesson);
};

export const updateLesson = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const lesson = await Lesson.findByPk(id);
  if (!lesson) return res.status(404).json({ message: "Lesson not found" });
  await lesson.update({ title, description });
  res.json(lesson);
};

export const deleteLesson = async (req, res) => {
  const { id } = req.params;
  const lesson = await Lesson.findByPk(id);
  if (!lesson) return res.status(404).json({ message: "Lesson not found" });
  await lesson.destroy();
  res.json({ message: "Lesson deleted" });
};