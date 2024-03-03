import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import CreateAccount from "./components/CreateAccount";
import Signin from "./components/Signin";
import Slider from "./components/Slider";
import Feedbar from "./components/Feedbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <Feedbar />
      <Card />
      <CreateAccount />
      <Signin />
    </>
  );
};

export default App;
