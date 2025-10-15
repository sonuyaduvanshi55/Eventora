import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectWithDB = () => {
  mongoose.set('strictQuery', false);
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch((err) => {
      console.error("❌ DB connection failed:", err);
      process.exit(1);
    });
};