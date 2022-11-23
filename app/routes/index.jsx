import { Link, useLoaderData } from "@remix-run/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { getNews } from "utils/api.server";
import Button from "~/components/Button";
import Card from "~/components/Card";
import Dropdown from "~/components/Dropdown";
import Field from "~/components/Field";
import Select from "~/components/Select";
import WeatherCard from "~/components/WeatherCard";

// export async function loader({request}){
//   var news;

// await axios({
//     method: 'post',
//     url: 'http://uia.centralindia.cloudapp.azure.com/api/nutrecom/',
//     data: {
//       "crop": "rice"
//     }
//   }).then(function (response) {
//     console.log(response.data)
//     news = response.data
//   })
//   .catch(function (error) {
//     news = error
//   });

//     return {news}
// }
export async function loader() {
  const news = await getNews();

  return { news };
}

export default function Index() {
  const { news } = useLoaderData();

  const [crop, setCrop] = useState("");

  useEffect(() => {
    const i = localStorage.getItem("crop");
    if (i) {
      setCrop(JSON.parse(i));
    }
  }, []);

  useEffect(() => {
    fetch(`http://uia.centralindia.cloudapp.azure.com/api/nutrecom/`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ crop: "rice" }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {/* crop crop */}
      <div className="p-4 flex flex-col gap-4 bg-white drop-shadow-lg rounded-lg">
        {console.log(crop, "Loading crop")}
        <p className="text-xl font-bold text-center">
          {" "}
          {crop[crop?.length - 1]?.type}
        </p>
        {crop !== "" ? (
          <div className="flex justify-evenly items-center">
            {
              <div className="flex flex-col items-center">
                <svg className="transform -rotate-90 w-14 h-14">
                  <circle
                    cx="50%"
                    cy="50%"
                    r="20"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    className="text-gray-700"
                  />

                  <circle
                    cx="50%"
                    cy="50%"
                    r="20"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={125.714285714}
                    strokeDashoffset={
                      125.714285714 -
                      ((crop[crop?.length - 1]?.nitrogen || 0) / 100) *
                        125.714285714
                    }
                    className="text-blue-500 "
                  />
                </svg>
                <p className="text-lg font-bold">
                  {crop[crop?.length - 1]?.nitrogen}
                </p>
                <p>Nitrogen</p>
              </div>
            }

            <div className="flex flex-col items-center">
              <svg className="transform -rotate-90 w-14 h-14">
                <circle
                  cx="50%"
                  cy="50%"
                  r="20"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  className="text-gray-700"
                />

                <circle
                  cx="50%"
                  cy="50%"
                  r="20"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray={125.714285714}
                  strokeDashoffset={
                    125.714285714 -
                    ((crop[crop?.length - 1]?.phosphorous || 0) / 100) *
                      125.714285714
                  }
                  className="text-blue-500 "
                />
              </svg>
              <p className="text-lg font-bold">
                {crop[crop?.length - 1]?.phosphorous}
              </p>
              <p>Phosphorous</p>
            </div>
            <div className="flex flex-col items-center">
              <svg className="transform -rotate-90 w-14 h-14">
                <circle
                  cx="50%"
                  cy="50%"
                  r="20"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  className="text-gray-700"
                />

                <circle
                  cx="50%"
                  cy="50%"
                  r="20"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray={125.714285714}
                  strokeDashoffset={
                    125.714285714 -
                    (crop[crop?.length - 1]?.potassium / 100 || 0) *
                      125.714285714
                  }
                  className="text-blue-500 "
                />
              </svg>
              <p className="text-lg font-bold">
                {crop[crop?.length - 1]?.potassium}
              </p>
              <p>Potassium</p>
            </div>
          </div>
        ) : null}
        <div className="flex justify-between">
          <Button as={Link} to="/viewcrop" className="w-fit">
            View
          </Button>
          <Button as={Link} to="/addCrop" className="w-fit">
            Add Crop
          </Button>
        </div>
      </div>

      {/* language */}
      {/* <Field
        as={Select}
        className="w-fit px-0 py-0 drop-shadow-xl"
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
      /> */}

      {/* weather */}
      <WeatherCard />

      <div className="flex flex-col gap-3">
        <div className="flex gap-2">
          <Link to="/cropsearch" className="w-2/4 ">
            <div className="rounded-lg drop-shadow-2xl h-36 bg-white flex flex-col justify-center items-center">
              <img width={120} src="cropsearch.png" />
              <p className="text-center font-medium">Crop recomend data</p>

            </div>
          </Link>
          <Link to="/croprecom" className="w-2/4 ">
            <div className="rounded-lg drop-shadow-2xl h-36 justify-center bg-white flex flex-col items-center">
              <img width={130} src="plantscan.png" />
              <p className="text-center font-medium">Crop search</p>

            </div>
          </Link>
        </div>

        <div className="flex gap-2">
          {/* <Link to="/weather" className="w-2/4 ">
            <div className="rounded-lg h-36 justify-center bg-white flex flex-col items-center">
              <img width={130} src="weathericon.png" />
              <p className="text-center font-medium">Weather prediction</p>

            </div>
          </Link> */}
          <Link to="/docscan" className="w-2/4 ">
            <div className="rounded-lg drop-shadow-lg bg-white flex flex-col items-center">
              <img className="h-36" src="doc.jpeg" />
              <p className="text-center font-medium">Crop doctor</p>

            </div>
          </Link>
          <Link to="/news" className="w-2/4 h- ">
            <div className="rounded-lg drop-shadow-lg h-min justify-center bg-white flex flex-col items-center">
              <img className="rounded h-1/6 justify-items-start" src="https://thumbs.dreamstime.com/b/packing-soil-potted-plants-potting-various-fertilizers-bottles-spray-gun-vector-illustration-flat-style-167427190.jpg" />
              <p className="text-center font-medium">Fertilizer Calc</p>

            </div>
          </Link>
        </div>
        
        <div className="flex gap-2">
          
          </div>
      </div>
      <div className="flex flex-col gap-4">
        <label className="text-lg font-bold ml-2">Local News</label>
        <div className="bg-white drop-shadow-2xl rounded-2xl px-4 py-4 flex flex-col gap-4 overscroll-y">
        {news.map((item) => (
          <a href={item.url}>
            <div className=" border-b border-xl px-2">
              <p className="font-normal">{item.title}</p>
              {/* <p className="font-normal">{item.description}</p> */}
              <p className="font-normal text-xs text-gray-600">
                {item["published date"]}
              </p>
            </div>
          </a>
        ))}
        </div>
      </div>
    </div>
  );
}
