import "./ItemCard.css";

const ItemCard = ({ card, onCardClick }) => {
  const handleClick = () => {
    onCardClick(card);
  };

  return (
    <li className="card">
      <img
        src={card.link}
        alt={card.name}
        onClick={handleClick}
        className="card__image"
      />
      <div className="card__title-and-like">
        <p className="card__title">{card.name}</p>
        <button type="button" className="card__like-button" />
      </div>
    </li>
  );
};

export default ItemCard;
