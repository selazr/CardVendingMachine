import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const conditions = ['Near Mint', 'Excellent', 'Good', 'Played'];
const grades = ['PSA 10', 'PSA 9', 'PSA 8', 'Ungraded'];

export default function AddCard() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [condition, setCondition] = useState(conditions[0]);
  const [grade, setGrade] = useState(grades[0]);
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fetch('/api/cards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({ name, image, condition, grade, quantity }),
      });
      if (!res.ok) throw new Error('Failed to add card');
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Add New Card</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-2 max-w-md">
        <input
          className="border p-2 w-full"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          className="border p-2 w-full"
          placeholder="Image URL"
          value={image}
          onChange={e => setImage(e.target.value)}
        />
        <select
          className="border p-2 w-full"
          value={condition}
          onChange={e => setCondition(e.target.value)}
        >
          {conditions.map(c => (
            <option key={c}>{c}</option>
          ))}
        </select>
        <select
          className="border p-2 w-full"
          value={grade}
          onChange={e => setGrade(e.target.value)}
        >
          {grades.map(g => (
            <option key={g}>{g}</option>
          ))}
        </select>
        <input
          type="number"
          className="border p-2 w-full"
          value={quantity}
          onChange={e => setQuantity(parseInt(e.target.value))}
        />
        <button className="bg-blue-500 text-white px-4 py-2">Save</button>
      </form>
    </div>
  );
}
