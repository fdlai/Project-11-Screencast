import { useState } from "react";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

import "./Header.css";

import logoPath from "../../images/logo.svg";
import avatarDefault from "../../images/avatar-default.png";

const Header = ({ weatherData, handleAddClick }) => {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  if (!weatherData) return null;

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  const username = "Terrence Tegegne";
  const avatar = avatarDefault;

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpened(!isMobileMenuOpened);
  };

  return (
    <header className="header">
      <div className="header__container">
        <img src={logoPath} alt="WTWR logo" className="header__logo" />
        <p className="header__date">
          {currentDate}, {weatherData.city}
        </p>
      </div>
      <div
        className={`header__nav ${
          isMobileMenuOpened ? "header__nav_opened" : ""
        }`}
      >
        <ToggleSwitch />
        <button onClick={handleAddClick} className="header__add-button">
          + Add clothes
        </button>
        <div className="header__profile">
          <div className="header__user-name">{username}</div>
          {avatar ? (
            <img
              className="header__avatar"
              src={avatar || avatarDefault}
              alt="user avatar"
            />
          ) : (
            <span className="header__avatar header__avatar_none">
              {username?.toUpperCase().charAt(0) || ""}
            </span>
          )}
        </div>
        {isMobileMenuOpened && (
          <button
            className="header__mobile-close"
            onClick={handleMobileMenuClick}
          />
        )}
      </div>
      {!isMobileMenuOpened && (
        <button
          className="header__mobile-menu"
          onClick={handleMobileMenuClick}
        />
      )}
    </header>
  );
};

export default Header;
