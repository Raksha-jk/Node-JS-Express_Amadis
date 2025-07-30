const express = require('express');
const fs = require('fs');
const path = require('path');
const sendCriticalError = require('../utils/emailer');

const router = express.Router();

router.post('/log-error', async (req, res) => {
  const { message, stack, level = 'info', source = 'frontend' } = req.body;

  const logEntry = `[${new Date().toISOString()}] [${level.toUpperCase()}] [${source}] ${message}\n${stack || ''}\n\n`;

  fs.appendFileSync(path.join(__dirname, '../logs/error.log'), logEntry);

  if (level === 'critical') {
    try {
      await sendCriticalError(`CRITICAL ERROR from ${source}`, logEntry);
    } catch (err) {
      console.error('Failed to send email:', err);
    }
  }

  res.json({ status: 'Logged successfully' });
});

router.get('/log-error', (req, res) => {
  const logs = fs.readFileSync(path.join(__dirname, '../logs/error.log'), 'utf8');
  res.type('text/plain').send(logs);
});

module.exports = router;
