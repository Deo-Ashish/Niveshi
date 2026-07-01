import React from "react";
import Award from "./Award";
import Education from "./Education";
import Pricing from "./Pricing";
import Stats from "./Stats";
import Hero from "./Hero";
import Navbar from "../Navbar";
import Footer from "../Footer";
import OpenAccount from "../OpenAccount";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Award />
      <Stats />
      <Pricing />
      <OpenAccount />
      <Education />
      <Footer />
    </>
  );
}

export default HomePage;
