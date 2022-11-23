import { Link } from "@remix-run/react";
import { useState } from "react";

export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="flex items-center justify-between mb-4">
      <img onClick={() => setIsNavOpen(true)} width={30} src="menu.svg" />
      <p className="text-center font-bold">Agro</p>
      <img width={60} src="logo.png"/>

      <div
        className={`${
          isNavOpen ? "absolute opacity-100" : "hidden opacity-0"
        } transform  transition duration-500 ease-in-out top-0 left-0 z-10 flex flex-col p-10 items-center h-screen w-screen bg-white`}
      >
        <div className="flex w-full justify-between">
          <img onClick={() => setIsNavOpen(false)} width={30} src="cross.svg" />
        </div>
        <p className="text-2xl font-bold">Menu</p>
        <div className="mt-7 flex flex-col gap-2 text-center">
          <Link to="/" onClick={() => setIsNavOpen(false)}>
            Home
          </Link>
          <Link to="/cropsearch" onClick={() => setIsNavOpen(false)}>
          Crop recomend data
          </Link>
          <Link to="/docscan" onClick={() => setIsNavOpen(false)}>
          Crop doctor
          </Link>
          <Link to="/weather" onClick={() => setIsNavOpen(false)}>
          Weather prediction
          </Link>
        </div>
      </div>
    </div>
  );
}
