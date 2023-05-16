const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routesUrls = require("./routes/routes");
const cors = require("cors");

dotenv.config();

mongoose.set("strictQuery", false);

mongoose.connect(process.env.DATABASE_ACCESS, () => {
  console.log("Database Connected ...");
});

app.use(express.json());
app.use(cors());
app.use("/api", routesUrls);

app.get("/healthcheck", async (_req, res, _next) => {
  const healthcheck = {
    uptime: process.uptime(),
    message: "OK",
    timestamp: Date.now(),
  };
  try {
    res.send(healthcheck);
  } catch (error) {
    healthcheck.message = error;
    res.status(503).send();
  }
});

app.get("/download", (req, res) => {
  const filePath = "data/Milad CV.pdf";
  const fileName = "Milad CV.pdf";

  res.download(filePath, fileName);
});

app.listen(4000, () => {
  console.log("Server is running on port 4000 ");
});
