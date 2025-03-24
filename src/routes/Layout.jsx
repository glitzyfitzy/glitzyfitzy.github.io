import { Outlet } from "react-router-dom";
import { Header } from "../sections/Header";
import { Splitter } from "../components/Splitter";
import { Footer } from "../sections/Footer";
import { useState } from "react";
import { SplashScreen } from "../sections/SplashScreen";

export const Layout = () => {
  // return (
  //   <div className="app-container">
  //     <Header />
  //     <Splitter />
  //     <main className="content">
  //       <Outlet /> {/* This is where page content will be rendered */}
  //     </main>
  //     <Splitter />
  //     <Footer />
  //   </div>
  // );

  const [showSplash, setShowSplash] = useState(true);
  const [opacity, setOpacity] = useState(0);

  const handleSplashComplete = () => {
    setShowSplash(false);
    // Start fade-in effect after splash screen is removed
    setTimeout(() => {
      setOpacity(1);
    }, 100);
  };

  return (
    <div className="app-container">
      {showSplash ? (
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
