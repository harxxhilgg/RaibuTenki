import { useState } from "react";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { WeatherInfo } from "./components/WeatherInfo";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = import.meta.env.VITE_API_KEY;

  const fetchWeather = async (city) => {
    setError("");
    setWeather(null);

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!res.ok) {
        throw new Error("City not found.");
      }

      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <Header />
      <SearchBar onSearch={fetchWeather} />
      <WeatherInfo weather={weather} error={error} />
    </>
  );
};

export default App;
