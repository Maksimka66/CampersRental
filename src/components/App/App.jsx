import { Routes, Route } from "react-router-dom";

import Home from "../../pages/Home/Home";
import Catalog from "../../pages/Catalog/Catalog";
import Favorites from "../../pages/Favorites/Favorites";
import NotFound from "../../pages/NotFound/NotFound";
import Features from "../Features/Features";
import Reviews from "../Reviews/Reviews";
import CamperModalInfo from "../CamperModalInfo/CamperModalInfo";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:camperId" element={<CamperModalInfo />}>
          <Route path="features" element={<Features />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
