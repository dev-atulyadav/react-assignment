import React, { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function Q2() {
  const [buttonProps] = useState([
    {
    text: "Login",
    func: () => {alert("I'm button!")},
    style: {
      backgroundColor: "#0094ff",
      color: "white",
    },
  },
    {
    text: "Sign Up",
    func: () => {alert("I'm button!")},
    style: {
      backgroundColor: "#1abc9c",
      color: "white",
    },
  },
    {
    text: "Delete",
    func: () => {alert("I'm button!")},
    style: {
      backgroundColor: "#c24545",
      color: "white",
    },
  },
]);
  return (
    <div>
      <Button buttonProps={buttonProps} />
      <Link to="/" className="px-5 py-3 bg-green-400 text-white uppercase font-semibold rounded-xl">Go Back</Link>
    </div>
  );
}
