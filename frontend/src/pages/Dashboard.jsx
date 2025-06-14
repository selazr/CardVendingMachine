import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import InventoryList from '../components/InventoryList';
import StatsPanel from '../components/StatsPanel';

const conditions = ['All', 'Near Mint', 'Excellent', 'Good', 'Played'];
const grades = ['All', 'PSA 10', 'PSA 9', 'PSA 8', 'Ungraded'];

export default function Dashboard() {
  const { user, logout } = useAuth();
  const [cards, setCards] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [condition, setCondition] = useState('All');
  const [grade, setGrade] = useState('All');
  const [stats, setStats] = useState({ total: 0, byRarity: {}, byCondition: {} });

  useEffect(() => {
    const fetchCards = async () => {
      const res = await fetch('/api/cards', {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const data = await res.json();
      setCards(data);
      setFiltered(data);
      computeStats(data);
    };
    fetchCards();
  }, [user]);

  useEffect(() => {
    let result = cards;
    if (condition !== 'All') result = result.filter(c => c.condition === condition);
    if (grade !== 'All') result = result.filter(c => c.grade === grade);
    setFiltered(result);
  }, [condition, grade, cards]);

  const computeStats = data => {
    const total = data.reduce((sum, c) => sum + c.quantity, 0);
    const byRarity = {};
    const byCondition = {};
    data.forEach(c => {
      byRarity[c.rarity] = (byRarity[c.rarity] || 0) + c.quantity;
      byCondition[c.condition] = (byCondition[c.condition] || 0) + c.quantity;
    });
    setStats({ total, byRarity, byCondition });
  };

  return (
    <div className="p-4 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl">Dashboard</h1>
        <div>
          <button className="mr-2" onClick={logout}>Logout</button>
          <Link to="/add-card" className="bg-blue-500 text-white px-4 py-1 rounded">Add Card</Link>
        </div>
      </div>

      <StatsPanel stats={stats} />

      <div className="flex gap-2">
        <select className="border p-2" value={condition} onChange={e => setCondition(e.target.value)}>
          {conditions.map(c => <option key={c}>{c}</option>)}
        </select>
        <select className="border p-2" value={grade} onChange={e => setGrade(e.target.value)}>
          {grades.map(g => <option key={g}>{g}</option>)}
        </select>
      </div>

      <InventoryList cards={filtered} />
    </div>
  );
}
