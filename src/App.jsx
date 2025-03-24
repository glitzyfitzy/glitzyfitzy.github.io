import { HashRouter, Routes, Route } from "react-router-dom";
import { Home } from "./routes/Home";
import { Layout } from "./routes/Layout";
import { About } from "./routes/About";
import { Contact } from "./routes/Contact";
import { Instagram } from "./routes/portfolio/kendra/Instagram";
import { TikTok } from "./routes/portfolio/kendra/Tiktok";
import { College_Tour } from "./routes/portfolio/kendra/College_Tour";
import { Celebrity_Influencer } from "./routes/portfolio/kendra/Celebrity_Influencer";
import { Photo_Shoot_BTS } from "./routes/portfolio/kendra/Photo_Shoot_BTS";
import { Events } from "./routes/portfolio/kendra/Events";
import { UT_Austin } from "./routes/portfolio/UT_Austin";
import { Glitzy_Fitzy } from "./routes/Glitzy_Fitzy";

export const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio">
            <Route path="kendra">
              <Route path="instagram" element={<Instagram />} />
              <Route path="tiktok" element={<TikTok />} />
              <Route path="college_tour" element={<College_Tour />} />
              <Route
                path="celebrity_influencer"
                element={<Celebrity_Influencer />}
              />
              <Route path="photo_shoot_bts" element={<Photo_Shoot_BTS />} />
              <Route path="events" element={<Events />} />
            </Route>
            <Route path="ut_austin" element={<UT_Austin />} />
          </Route>
          <Route path="glitzy_fitzy" element={<Glitzy_Fitzy />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
