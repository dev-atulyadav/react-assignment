import React from "react";

export default function Button({ buttonProps }) {
  return (
    <div className="flex justify-center items-center gap-4">
      {buttonProps.map((value, index) => (
        <button
          key={index}
          className="px-5 py-3 text-xl uppercase text-white font-semibold rounded-lg"
          style={value.style}
          onClick={value.func}
        >
          <p>{value.text}</p>
        </button>
      ))}
    </div>
  );
}
