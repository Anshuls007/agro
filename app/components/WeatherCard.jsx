import { useEffect, useState } from "react";
import Button from "./Button";
import Card from "./Card";

export default function WeatherCard() {
  const [status, setStatus] = useState(null);
  const [temp, setTemp] = useState(null);
  const [location, setLocation] = useState(null);

  function getLocation() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      () => {
        setLocation({
          lat: 25.3426116,
          lng: 74.6288301,
        });
      },
      {
        enableHighAccuracy: true,
      }
    );
  }

  useEffect(() => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      getLocation();
    }
  }, []);

  useEffect(() => {
    if (location) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lng}&appid=e91405a7d2e03bc5fe333f1053da523a`
      )
        .then((response) => response.json())
        .then((data) => setTemp(data));
    }
  }, [location]);

  return (
    <div className="flex justify-between">
      <div className=" mx-4 flex flex-col gap-2">
        <p className="text-3xl mt-2 text-green-500">
          {temp ? String((temp.main.temp-273.15).toFixed(2))+"°C" : "Weathering Now..."}
        </p>
        <p className="text-gray-400">
          {temp ? temp.weather[0].main : "Locating..."}
        </p>
      </div>
      <div>
        {temp ? (
          <img
          width={80}
          src={`http://openweathermap.org/img/wn/${temp?.weather[0]?.icon}@2x.png`}
        />
        ) : null}
      </div>
    </div>
  );
}
