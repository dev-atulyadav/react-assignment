import React from "react";
import Bg from "./assets/images/bg.jpg";

import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <section
        style={{
          backgroundImage: `url("${Bg}")`,
        }}
        className="h-screen w-screen bg-no-repeat bg-cover bg-center p-4 overflow-auto"
      >
        <Outlet />
      </section>
    </>
  );
}
