import { Progress } from "../models/index.js";

export const getProgress = async (req, res) => {
  const progress = await Progress.findAll();
  res.json(progress);
};

export const updateProgress = async (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;
  const progress = await Progress.findByPk(id);
  if (!progress) return res.status(404).json({ message: "Progress not found" });
  await progress.update({ completed });
  res.json(progress);
};