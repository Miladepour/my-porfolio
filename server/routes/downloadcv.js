const express = require("express");
const router = express.Router();
import CV from "../data/Milad CV.pdf";

router.get("/", (req, res) => {
  const filePath = CV;
  const fileName = "Milad CV.pdf";
  res.download(filePath, fileName);
});

module.exports = router;
