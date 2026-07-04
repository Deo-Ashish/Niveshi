import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import Navbar from "../Navbar";
import Footer from "../Footer";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageUrl={"media/images/kite.png"}
        title={"Kite"}
        description={
          "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        }
        googlePlayImg={"media/images/googlePlayBadge.svg"}
        appStoreImg={"media/images/appstoreBadge.svg"}
        demo={"Try demo"}
        learn={"Learn more"}
      />
      <RightSection
        imageUrl={"media/images/console.png"}
        title={"Console"}
        description={
          "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        }
        learn={`Learn more`}
      />
      <LeftSection
        imageUrl={"media/images/coin.png"}
        title={"Coin"}
        description={
          "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        }
        googlePlayImg={"media/images/googlePlayBadge.svg"}
        appStoreImg={"media/images/appstoreBadge.svg"}
        demo={"Coin"}
      />
      <RightSection
        imageUrl={"media/images/kiteConnect.svg"}
        title={"Kite Connect API"}
        description={
          "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        }
        demo={`key connect`}
      />
      <LeftSection
        imageUrl={"media/images/varsity.png"}
        title={"Varsity mobile"}
        description={
          "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        }
        googlePlayImg={"media/images/googlePlayBadge.svg"}
        appStoreImg={"media/images/appstoreBadge.svg"}
      />
      <Universe />
    </>
  );
}

export default ProductPage;
