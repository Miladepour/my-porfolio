const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routesUrls = require('./routes/routes');
const downloadcv = require('./routes/downloadcv');
const cors = require('cors');

dotenv.config();

mongoose.set('strictQuery', false);

mongoose.connect(process.env.DATABASE_ACCESS, () => {
  console.log('Database Connected ...');
});

app.use(express.json());
app.use(cors());
app.use('/api', routesUrls);
app.use('/api/downloadcv', downloadcv);

app.get('/healthcheck', async (_req, res, _next) => {
  const healthcheck = {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: Date.now(),
  };
  try {
    res.send(healthcheck);
  } catch (error) {
    healthcheck.message = error;
    res.status(503).send();
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
