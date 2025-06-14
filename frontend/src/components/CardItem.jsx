export default function CardItem({ card }) {
  return (
    <div className="border rounded p-2 flex gap-2 items-center">
      <img src={card.image} alt={card.name} className="w-16 h-16 object-cover" />
      <div className="flex-1">
        <h3 className="font-semibold">{card.name}</h3>
        <p className="text-sm">{card.condition} - {card.grade}</p>
      </div>
      <span className="font-bold">x{card.quantity}</span>
    </div>
  );
}
