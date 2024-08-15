import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { readFileSync } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

const apiData = JSON.parse(
  readFileSync(path.join(__dirname, "data.json"), "utf-8")
);

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/cricket_trivia", (req, res) => {
  res.send(apiData);
});

app.listen(port, () => {
  console.log(`server is running on port ${port}.`);
});
