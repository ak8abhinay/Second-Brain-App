import { Request, Response } from "express";
import { ContentModel } from "../models/content.model";

export const createContent = async (req: Request, res: Response) => {
  const { link, type } = req.body;
  await ContentModel.create({
    link,
    type,
    // @ts-ignore
    userId: req.userId,
    tags: []
  });
  res.json({ message: "Content added" });
};

export const getContent = async (req: Request, res: Response) => {
  // @ts-ignore
  const userId = req.userId;
  const content = await ContentModel.find({ userId }).populate("userId", "username");
  res.json({ content });
};

export const deleteContent = async (req: Request, res: Response) => {
  const { contentId } = req.body;
  await ContentModel.deleteMany({
    contentId,
    // @ts-ignore
    userId: req.userId
  });
  res.json({ message: "Deleted" });
};