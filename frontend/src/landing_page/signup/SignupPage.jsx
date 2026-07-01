import React from "react";
import Navbar from "../Navbar";
import BenefitsToOpenDematAccount from "./BenefitsToOpenDematAccount";
import DifferentAccountTypes from "./DifferentAccountTypes";
import FAQs from "./FAQs";
import InvestmentOptions from "./InvestmentOptions";
import Signup from "./Signup";
import StepsToOpenDematAccount from "./StepsToOpenDematAccount";
import Footer from "../Footer";

function SignupPage() {
  return (
    <>
      <Navbar />
      <BenefitsToOpenDematAccount />
      <DifferentAccountTypes />
      <FAQs />
      <InvestmentOptions />
      <Signup />
      <StepsToOpenDematAccount />
      <Footer />
    </>
  );
}

export default SignupPage;
