import dotenv from 'dotenv'

dotenv.config();

export const DB = process.env.DB!;
export const PORT = process.env.PORT || 3000;
export const JWT_KEY = process.env.JWT_KEY!;
export const FRONTEND_URL = process.env.FRONTEND_URL!;