import { Suspense } from "react";
import { Splitter } from "./components/Splitter";
import { Footer } from "./sections/Footer";
import { Header } from "./sections/Header";
import { Profile } from "./sections/Profile";
import { SplashScreen } from "./sections/SplashScreen";
import { useState } from "react";

export const App = () => {
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
    <div>
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
          <Profile />
          <Splitter />
          <Footer />
        </div>
      )}
    </div>
  );
};
