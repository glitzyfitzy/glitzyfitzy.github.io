import { Splitter } from "./components/Splitter";
import { Footer } from "./sections/Footer";
import { Header } from "./sections/Header";
import { Profile } from "./sections/Profile";

function App() {
  return (
    <div className="flex flex-col justify-center content-center h-screen bg-background">
      <Header />
      <Splitter />
      <Profile />
      <Splitter />
      <Footer />
    </div>
  );
}

export default App;
