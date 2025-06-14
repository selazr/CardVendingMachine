export default function StatsPanel({ stats }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
      <div className="bg-white p-4 rounded shadow">
        <h4 className="text-sm">Total Cards</h4>
        <p className="text-xl font-bold">{stats.total}</p>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h4 className="text-sm">By Rarity</h4>
        {Object.entries(stats.byRarity).map(([rarity, count]) => (
          <p key={rarity}>{rarity}: {count}</p>
        ))}
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h4 className="text-sm">By Condition</h4>
        {Object.entries(stats.byCondition).map(([cond, count]) => (
          <p key={cond}>{cond}: {count}</p>
        ))}
      </div>
    </div>
  );
}
