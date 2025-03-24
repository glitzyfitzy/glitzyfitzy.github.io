import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../sections/Header";
import { Splitter } from "../components/Splitter";
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

  console.log(showSplash);
  console.log(location.pathname);
  console.log(showSplash && location.pathname === "/");

  useEffect(() => {
    if (showSplash && location.pathname === "/") {
      setShow(true);
    } else {
      setShow(false);
      setOpacity(1);
    }
  });

  return (
    <div className="app-container">
      {show ? (
        <>
          <SplashScreen onDone={handleSplashComplete} />
        </>
      ) : (
        <div
          className="flex flex-col justify-center content-center h-screen bg-background"
          style={{
            opacity: opacity,
            transition: "opacity 1s ease-in",
          }}
        >
          <Header />
          <Splitter />
          <main className="content">
            <Outlet /> {/* This is where page content will be rendered */}
          </main>
          <Splitter />
          <Footer />
        </div>
      )}
    </div>
  );
};
