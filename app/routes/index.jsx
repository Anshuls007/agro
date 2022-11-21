import { Link } from "@remix-run/react";
import Button from "~/components/Button";
import Card from "~/components/Card";
import Dropdown from "~/components/Dropdown";
import Field from "~/components/Field";
import Nav from "~/components/Nav";
import Select from "~/components/Select";
import WeatherCard from "~/components/WeatherCard";

export default function Index() {
  return (
    <div className="flex flex-col gap-4">
      <Field
        as={Select}
        className="w-fit px-0 py-0"
        label="Language"
        options={[
          { value: "Hindi", label: "Hindi" },
          { value: "English", label: "English" },
        ]}
        defaultOption={[
          { value: "Hindi", label: "Hindi" },
          { value: "English", label: "English" },
        ].find(function (option) {
          return option.value === "Hindi";
        })}
      />
      <WeatherCard />

      <div className="flex flex-col gap-3">
        <div className="flex gap-2">
          <Link to="/cropsearch" className="w-2/4 ">
            <div className="rounded-lg bg-white flex flex-col items-center">
              <img className="h-36" src="cropsearch.png" />
            </div>
            <p className="text-center font-medium">Crop recomend data</p>
          </Link>
          <Link to="/cropscan" className="w-2/4 ">
            <div className="rounded-lg bg-white flex flex-col items-center">
              <img className="h-36" src="plantscan.png" />
            </div>
            <p className="text-center font-medium">Crop search</p>
          </Link>
        </div>

        <div className="flex gap-2">
          <Link to="/weather" className="w-2/4 ">
            <div className="rounded-lg bg-white flex flex-col items-center">
              <img className="h-36" src="weathericon.png" />
            </div>
            <p className="text-center font-medium">Weather prediction</p>
          </Link>
          <Link to="/docscan" className="w-2/4 ">
            <div className="rounded-lg bg-white flex flex-col items-center">
              <img className="h-36" src="doc.jpeg" />
            </div>
            <p className="text-center font-medium">Crop doctor</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
