import { Splitter } from "./components/Splitter";
import { Footer } from "./sections/Footer";
import { Header } from "./sections/Header";
import { Profile } from "./sections/Profile";
import { SplashScreen } from "./sections/SplashScreen";
import { useState } from "react";

export const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };
  return (
    <div>
      {showSplash ? (
        <SplashScreen onDone={handleSplashComplete} />
      ) : (
        <div className="flex flex-col justify-center content-center h-screen bg-background">
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
