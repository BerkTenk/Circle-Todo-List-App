const express = require('express');
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');
const app = express();
const port = 3001;

app.use(express.json());

app.post('/create-payment', async (req, res) => {
  const { amount, currency, walletAddress } = req.body;

  try {
    const response = await axios.post(
      'https://api-sandbox.circle.com/v1/payments',
      {
        amount: { amount, currency },
        source: { type: 'wallet', id: walletAddress },
        idempotencyKey: uuidv4() 
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
        }
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});