import { Routes, Route } from "react-router-dom";

import Home from "../../pages/Home/Home";
import Catalog from "../../pages/Catalog/Catalog";
import Favorites from "../../pages/Favorites/Favorites";
import NotFound from "../../pages/NotFound/NotFound";
import Features from "../Features/Features";
import Reviews from "../Reviews/Reviews";
import CamperModalInfo from "../CamperModalInfo/CamperModalInfo";
import Navigation from "../Navigation/Navigation";

import "./App.css";

function App() {
  return (
    <main>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />}>
          <Route path=":camperId" element={<CamperModalInfo />}>
            <Route path="features" element={<Features />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
