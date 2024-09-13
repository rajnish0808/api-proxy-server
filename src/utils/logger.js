const fs = require('fs');
const path = require('path');
const logFile = path.join(__dirname, 'access.log');

const logRequest = (req, success) => {
  const logEntry = `${new Date().toISOString()} - ${req.ip} - ${req.method} ${req.originalUrl} - ${success ? 'Success' : 'Failure'}\n`;
  fs.appendFileSync(logFile, logEntry);
};

module.exports = { logRequest };
