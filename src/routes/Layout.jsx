import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../sections/Header";
import { Splitter } from "../sections/Splitter";
import { Footer } from "../sections/Footer";
import { useState } from "react";
import { SplashScreen } from "../sections/SplashScreen";
import { useEffect } from "react";

export const Layout = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [opacity, setOpacity] = useState(0);
  const [show, setShow] = useState(true);
  const location = useLocation();

  const handleSplashComplete = () => {
    setShowSplash(false);
    // Start fade-in effect after splash screen is removed
    setTimeout(() => {
      setOpacity(1);
    }, 100);
  };

  useEffect(() => {
    if (showSplash && location.pathname === "/") {
      setShow(true);
    } else {
      setShow(false);
      setOpacity(1);
    }
  });

  return (
    // In your Layout component
    <div className="app-container min-h-screen flex flex-col content-center">
      {show ? (
        <SplashScreen onDone={handleSplashComplete} />
      ) : (
        <div
          className="flex flex-col min-h-screen justify-center bg-background overflow-y-auto mt-10 mb-10 ml-[10%] mr-[10%]"
          style={{
            opacity: opacity,
            transition: "opacity 1s ease-in",
          }}
        >
          <Header />
          <Splitter />
          {/* <main className="content flex-grow"> */}
          <Outlet /> {/* This is where page content will be rendered */}
          {/* </main> */}
          <Splitter />
          <Footer />
        </div>
      )}
    </div>
  );
};
