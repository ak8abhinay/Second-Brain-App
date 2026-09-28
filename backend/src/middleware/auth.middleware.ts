import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_PASSWORD } from "../config";

export const userMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies?.token;

  if (!token) {
    res.status(403).json({ message: "You are not logged in" });
    return;
  }

  try {
    const decoded = jwt.verify(token, JWT_PASSWORD);
    // @ts-ignore
    req.userId = (decoded as any).id;
    next();
  } catch (e) {
    res.status(403).json({ message: "Invalid or expired token" });
  }
};