import mongoose, { model, Schema } from "mongoose";
import { CONTENT_TYPES } from "../validators/content.validator";

const ContentSchema = new Schema(
  {
    type: { type: String, enum: CONTENT_TYPES, required: true },
    title: { type: String, required: true },
    description: String,
    link: String,
    rawText: String,
    fileId: String,
    fileName: String,
    mimeType: String,
    tags: [String],
    userId: { type: mongoose.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

export const ContentModel = model("Content", ContentSchema);