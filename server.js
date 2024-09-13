require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const proxyRoute = require('./src/routes/proxyRoute');
const authMiddleware = require('./src/middleware/auth');
const app = express();
const port = process.env.PORT || 3001;

app.use(morgan('combined'));
app.use(express.json()); 

app.use('/api', authMiddleware); // Apply authentication middleware
app.use('/api', proxyRoute); // Apply proxy route

app.get('/', (req, res) => {
  res.send('Welcome to the API Proxy Server');
});

app.get('/favicon.ico', (req, res) => res.sendStatus(204));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
