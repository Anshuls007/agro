import { Link } from "@remix-run/react";
import { useEffect, useState } from "react";
import Button from "~/components/Button";
import Card from "~/components/Card";

export default function Weather() {
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
        `https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lng}&appid=e91405a7d2e03bc5fe333f1053da523a`
      )
        .then((response) => response.json())
        .then((data) => setTemp(data));
    }
  }, [location]);

  return (
    <div className="flex flex-col gap-2">
      {temp?.list?.map(item => (
        <Card className="flex justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-3xl">{item.main.temp}</p>
          <p className="text-gray-400">
          {item?.weather[0]?.description}
          </p>
          <p className="text-gray-400">
          {item.dt_txt} 
          </p>
        </div>
        <div>
          <img
            width={80}
            src={`http://openweathermap.org/img/wn/${item?.weather[0]?.icon}@2x.png`}
          />
        </div>
      </Card>
      ))}
    </div>
  );
}
