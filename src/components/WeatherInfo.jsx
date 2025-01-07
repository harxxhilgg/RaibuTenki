/* eslint-disable react/prop-types */
const WeatherInfo = ({ weather, error }) => {
  if (error) {
    return (
      <p className="text-red-800 bg-black p-5 py-4 rounded-full mt-10 mx-[20%]">
        {error}
      </p>
    );
  }

  if (!weather) {
    return null;
  }

  return (
    <div className="flex flex-col items-center w-auto mx-20 rounded-full border-t-4 border-white text-white mt-9 p-7">
      <h1 className="text-[28px]">Weather in {weather.name}</h1>
      <div className="flex gap-[2rem] mt-[2.5rem]">
        <div>
          <img
            className="h-[150px]"
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
          />
        </div>
        <div className="flex flex-col justify-center text-[20px]">
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
};

export { WeatherInfo };
