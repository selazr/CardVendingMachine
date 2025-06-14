import CardItem from './CardItem';

export default function InventoryList({ cards }) {
  if (!cards.length) return <p>No cards found.</p>;
  return (
    <div className="grid gap-2">
      {cards.map(card => (
        <CardItem key={card.id} card={card} />
      ))}
    </div>
  );
}
