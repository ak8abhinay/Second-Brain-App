import { Request, Response } from "express";
import { LinkModel } from "../models/link.model";
import { ContentModel } from "../models/content.model";
import { UserModel } from "../models/user.model";
import { random } from "../utils/random";

export const shareBrain = async (req: Request, res: Response) => {
  const { share } = req.body;
  // @ts-ignore
  const userId = req.userId;

  if (share) {
    const existingLink = await LinkModel.findOne({ userId });
    if (existingLink) {
      res.json({ hash: existingLink.hash });
      return;
    }
    const hash = random(10);
    await LinkModel.create({ userId, hash });
    res.json({ msg: "/share/" + hash });
  } else {
    await LinkModel.deleteOne({ userId });
    res.json({ msg: "Removed link" });
  }
};

export const getSharedBrain = async (req: Request, res: Response) => {
  const hash = req.params.shareLink;
  const link = await LinkModel.findOne({ hash });

  if (!link) {
    res.status(411).json({ msg: "Sorry incorrect input" });
    return;
  }

  const content = await ContentModel.find({ userId: link.userId });
  const user = await UserModel.findOne({ _id: link.userId });

  if (!user) {
    res.status(411).json({ msg: "user not found, error should ideally not happen" });
    return;
  }

  res.json({ username: user.username, content });
};