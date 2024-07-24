import axios from 'axios';

const createPayment = async (amount, currency, walletAddress) => {
  const response = await axios.post('http://localhost:3001/create-payment', {
    amount,
    currency,
    walletAddress
  });

  return response.data;
};

export default createPayment;