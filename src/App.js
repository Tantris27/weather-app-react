import './App.css';
import { useState } from 'react';

function App() {
  const [city, setCity] = useState('Vienna');
  const [feelsLike, setFeelsLike] = useState(null);
  const [tempa, setTempa] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [tempMax, setTempMax] = useState(null);
  const [tempMin, setTempMin] = useState(null);
  const [weatherState, setWeatherState] = useState(null);
  // const print = city[0].toUpperCase() + city.slice(1);

  const handleSubmit = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API}&units=metric`,
    )
      .then((x) => x.json())
      .then((data) => {
        setTempa(parseInt(data.main.temp));
        setFeelsLike(parseInt(data.main.feels_like));
        setHumidity(data.main.humidity);
        setTempMin(parseInt(data.main.temp_min));
        setTempMax(parseInt(data.main.temp_max));
        setWeatherState(data.weather[0].main);
        return;
      });
  };
  const handleChange = (e) => {
    setCity(e.currentTarget.input);
  };
  return (
    <div>
      <h1>Weather in {city}</h1>
      <ul>
        <li>Temperature: {tempa}</li>
        <li>Feels Like: {feelsLike}</li>
        <li>Humidity: {humidity}</li>
        <li>tempMax: {tempMax}</li>
        <li>tempMin: {tempMin}</li>
        <li>weatherState: {weatherState}</li>
      </ul>
      <input type="text" value={city} onChange={handleChange} />
      <button type="submit" placeholder="Vienna" onClick={handleSubmit}>
        Change City
      </button>
    </div>
  );
}

export default App;
