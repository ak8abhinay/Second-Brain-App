import dotenv from "dotenv";

dotenv.config();

export const JWT_PASSWORD = process.env.JWT_SECRET!;

export const MONGO_URL = process.env.MONGO_URL!;

export const PORT = Number(process.env.PORT) || 3000;