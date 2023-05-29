const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const filePath = './data/Milad CV.pdf';
  const fileName = 'Milad CV.pdf';
  res.download(filePath, fileName);
});

module.exports = router;
