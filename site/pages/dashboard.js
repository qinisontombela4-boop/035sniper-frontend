jsx
// site/pages/dashboard.js
import { useState, useEffect } from 'react';
import axios from 'axios';export default function Dashboard() {
  const [signals, setSignals] = useState([]);
  const [mt5Data, setMt5Data] = useState({});  useEffect(() => {
    axios.get('https://your-backend.up.railway.app/api/signals').then(res => setSignals(res.data));
    axios.get('https://your-backend.up.railway.app/api/mt5-data').then(res => setMt5Data(res.data));
  }, []);  return (
    <div className="bg-black text-gold min-h-screen p-4">
      <h1 className="text-2xl">Signals</h1>
      {signals.map((s, i) => (
        <div key={i}>{s.symbol} {s.direction}</div>
      ))}
      <h1 className="text-2xl mt-4">MT5 Data</h1>
      <pre>{JSON.stringify(mt5Data)}</pre>
    </div>
  );
}
