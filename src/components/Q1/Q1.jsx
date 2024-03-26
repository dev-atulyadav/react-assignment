import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

export default function Q1() {
  const [count, setCount] = useState(1);

  return (
    <div className="flex flex-col justify-start items-start w-full gap-4">
      <Header />
      <Header />
      <Header />
      <Link to="/" className="p-4 bg-green-400 rounded-xl text-white text-xl uppercase self-center">Go Back</Link>
    </div>
  );
}
