import React, { useState } from "react";
import Logo from "../../assets/react.svg";
import { Link } from "react-router-dom";

export default function Header() {
  const [navLinks] = useState(["Home", "About", "Service"]);
  return (
    <header className="p-4 bg-[#00000033] backdrop-blur-[10px] border text-white uppercase flex justify-between items-center rounded-xl w-full">
      <div className="flex justify-center items-center gap-4 text-2xl font-semibold">
        <img src={Logo} alt="" />
        <h1>React & Vite</h1>
      </div>
      <nav>
        <ul className="flex justify-center items-center gap-4">
          {navLinks.map((value, index) => (
            <Link key={index} onClick={() => alert("This is demo Navs")}
            className="hover:bg-[#dddddd22] hover:border-white border border-transparent p-2 rounded-lg"
            >
              {value}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
}
