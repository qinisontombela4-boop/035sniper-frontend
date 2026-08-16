jsx
// site/pages/index.js
import { useState } from 'react';
import axios from 'axios';
export default function Home() {
  const [loading, setLoading] = useState(false);  const handlePay = async () => {
    setLoading(true);
    const res = await axios.post('https://your-backend.up.railway.app/api/create-payment');
    window.location.href = res.data.url;
  };  return (
    <div className="bg-black text-gold min-h-screen flex items-center justify-center flex-col">
      <h1 className="text-4xl mb-4">035 Sniper</h1>
      <button 
        onClick={handlePay} 
        disabled={loading}
        className="bg-gold text-black px-4 py-2 rounded"
      >
        {loading ? 'Loading...' : 'Get Access with PayPal'}
      </button>
    </div>
  );
}
