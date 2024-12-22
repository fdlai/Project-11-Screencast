const location = { latitude: "42.809730", longitude: "-70.876740" };
const apiKey = "e6e12db293d2ad5ab680c2604bc83283";

const weatherOptions = [
  {
    day: true,
    condition: "clear",
    url: new URL("../images/day/clear.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "clouds",
    url: new URL("../images/day/clouds.png", import.meta.url).href,
  },

  {
    day: true,
    condition: "fog",
    url: new URL("../images/day/fog.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "rain",
    url: new URL("../images/day/rain.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "snow",
    url: new URL("../images/day/snow.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "thunderstorm",
    url: new URL("../images/day/thunderstorm.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "clear",
    url: new URL("../images/night/clear.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "clouds",
    url: new URL("../images/night/clouds.png", import.meta.url).href,
  },

  {
    day: false,
    condition: "fog",
    url: new URL("../images/night/fog.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "rain",
    url: new URL("../images/night/rain.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "snow",
    url: new URL("../images/night/snow.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "thunderstorm",
    url: new URL("../images/night/thunderstorm.png", import.meta.url).href,
  },
];

const defaultWeatherOptions = {
  day: {
    url: new URL("../images/day/default.png", import.meta.url).href,
  },
  night: {
    url: new URL("../images/night/default.png", import.meta.url).href,
  },
};

export { location, apiKey, weatherOptions, defaultWeatherOptions };
