import { useEffect, useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import { apiKey, location } from "../../utils/constants";
import { filterWeatherData, getWeather } from "../../utils/weatherApi";
import { defaultClothingItems } from "../../utils/clothingItems";

const App = () => {
  const [weatherData, setWeatherData] = useState({
    city: "",
    temp: { F: 999 },
    type: "",
  });
  const [clothingItems, setClothingItems] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setActiveModal("preview");
  };

  const closeAllModals = () => {
    setActiveModal("");
  };

  useEffect(() => {
    getWeather(location, apiKey)
      .then((data) => {
        setWeatherData(filterWeatherData(data));
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    setClothingItems(defaultClothingItems);
  }, []);

  return (
    <div className="page">
      <div className="page__wrapper">
        <Header weatherData={weatherData} handleAddClick={handleAddClick} />
        <Main
          weatherData={weatherData}
          cards={clothingItems}
          onCardClick={handleCardClick}
        />
        <Footer />
      </div>
      <ModalWithForm
        title="New garment"
        name="new-card"
        onClose={closeAllModals}
        isOpen={activeModal === "add-garment"}
      >
        <label className="modal__label">
          Name
          <input
            type="text"
            name="name"
            id="clothing-name"
            className="modal__input modal__input_type_card-name"
            placeholder="Name"
            required
            minLength="1"
            maxLength="30"
          />
          <span className="modal__error" id="place-name-error" />
        </label>
        <label className="modal__label">
          Image
          <input
            type="url"
            name="link"
            id="clothing-link"
            className="modal__input modal__input_type_url"
            placeholder="Image URL"
            required
          />
          <span className="modal__error" id="place-link-error" />
        </label>
        <fieldset className="modal__fieldset modal__fieldset_type_radio">
          <legend className="modal__legend">Select the weather type:</legend>
          <div>
            <input
              className="modal__radio-button"
              type="radio"
              id="choiceHot"
              name="weatherType"
              value="hot"
            />
            <label className="modal__label_type_radio" htmlFor="choiceHot">
              Hot
            </label>
          </div>
          <div>
            <input
              className="modal__radio-button"
              type="radio"
              id="choiceWarm"
              name="weatherType"
              value="warm"
            />
            <label className="modal__label_type_radio" htmlFor="choiceWarm">
              Warm
            </label>
          </div>
          <div>
            <input
              className="modal__radio-button"
              type="radio"
              id="choiceCold"
              name="weatherType"
              value="cold"
            />
            <label className="modal__label_type_radio" htmlFor="choiceCold">
              Cold
            </label>
          </div>
        </fieldset>
      </ModalWithForm>
      <ItemModal
        card={selectedCard || {}}
        onClose={closeAllModals}
        activeModal={activeModal}
        isOpen={activeModal === "preview"}
      />
    </div>
  );
};

export default App;
