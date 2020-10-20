import React from "react";
import Form from "./components/Form";
import Navbar from "./components/Navbar";

export default function App() {
  console.log(
    "%c Hello eTEU",
    "font-weight: bold; font-size: 50px; color:red; -webkit-text-stroke: 1px black"
  );

  return (
    <div>
      <Navbar />
      <Form />
    </div>
  );
}
