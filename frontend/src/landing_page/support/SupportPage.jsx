import React from "react";
import SupportOptions from "./SupportOptions";
import Navbar from "../Navbar";
import SupportSearch from "./SupportSearch";
import Footer from "../Footer";

function SupportPage() {
  return (
    <>
      <Navbar />
      <SupportOptions />
      <SupportSearch />
      <Footer />
    </>
  );
}

export default SupportPage;
