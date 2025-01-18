import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import path from "path";

import userRoutes from "./routes/userRoutes";
import siteRoutes from "./routes/siteRoutes";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "https://squarespaceclone.onrender.com"],
    credentials: true,
  })
);

if (process.env.URI) {
  mongoose
    .connect(process.env.URI)
    .then(() => console.log("Successfully Connected to DB"))
    .catch((err) => console.error("Connection to DB failed", err));
} else {
  console.error("DB_URI environment variable is not defined");
}

app.get("/", (req: Request, res: Response): void => {
  res.status(200).send({ message: "Server is alive !" });
});

app.use("/api/users", userRoutes);
app.use("/api/sites", siteRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
