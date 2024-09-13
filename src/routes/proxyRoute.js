const express = require('express');
const axios = require('axios');
const logger = require('../utils/logger');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const apiResponse = await axios.get(process.env.API_URL);
    logger.logRequest(req, true);
    res.json(apiResponse.data);
  } catch (error) {
    logger.logRequest(req, false);
    if (error.response) {
      res.status(error.response.status).json({ message: error.response.data.message || 'Error fetching data from the API' });
    } else if (error.request) {
      res.status(500).json({ message: 'No response from the API' });
    } else {
      res.status(500).json({ message: 'Error setting up the request' });
    }
  }
});

module.exports = router;
