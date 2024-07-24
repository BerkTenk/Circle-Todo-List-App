import React, { useState } from 'react';
import createPayment from './PaymentService';

const ThemeStore = () => {
  const [theme, setTheme] = useState('default');

  const handlePurchase = async (theme) => {
    try {
      const result = await createPayment('10', 'USD', 'USER_WALLET_ADDRESS');
      if (result.status === 'confirmed') {
        setTheme(theme);
        alert('Purchase successful! Theme applied.');
      }
    } catch (error) {
      alert('Purchase failed. Please try again.');
    }
  };

  return (
    <div className='App'>
      <h1>Purchase Themes</h1>
      <button onClick={() => handlePurchase('dark')}>Buy Dark Theme</button>
      <button onClick={() => handlePurchase('light')}>Buy Light Theme</button>
      <div className={`app-theme-${theme}`}>
        <p>Your current theme is: {theme}</p>
      </div>
    </div>
  );
};

export default ThemeStore;