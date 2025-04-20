import { Word } from "../models/index.js";

export const getWords = async (req, res) => {
  const words = await Word.findAll();
  res.json(words);
};

export const createWord = async (req, res) => {
  const { text, translation, lessonId } = req.body;
  const word = await Word.create({ text, translation, lessonId });
  res.status(201).json(word);
};

export const updateWord = async (req, res) => {
  const { id } = req.params;
  const { text, translation } = req.body;
  const word = await Word.findByPk(id);
  if (!word) return res.status(404).json({ message: "Word not found" });
  await word.update({ text, translation });
  res.json(word);
};

export const deleteWord = async (req, res) => {
  const { id } = req.params;
  const word = await Word.findByPk(id);
  if (!word) return res.status(404).json({ message: "Word not found" });
  await word.destroy();
  res.json({ message: "Word deleted" });
};