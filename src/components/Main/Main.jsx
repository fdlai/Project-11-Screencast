import "./Main.css";
import ItemCard from "../ItemCard/ItemCard";
import WeatherCard from "../WeatherCard/WeatherCard";

const Main = ({ weatherData, cards, onCardClick }) => {
  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />
      <section className="main__clothes">
        <p className="main__description">
          Today is {weatherData.temp.F}°F / You may want to wear:
        </p>
        <ul className="main__items">
          {cards
            // .filter((card) => card.weather === weatherData.type)
            .map((filteredCard) => (
              <ItemCard
                key={filteredCard._id}
                card={filteredCard}
                onCardClick={onCardClick}
              />
            ))}
        </ul>
      </section>
    </main>
  );
};

export default Main;
