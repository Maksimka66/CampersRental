import { Routes, Route } from "react-router-dom";

import Home from "../../pages/Home/Home";
import Catalog from "../../pages/Catalog/Catalog";
import Favorites from "../../pages/Favorites/Favorites";
import NotFound from "../../pages/NotFound/NotFound";
import ModalCamperInfo from "../ModalCamperInfo/ModalCamperInfo";
import Features from "../Features/Features";
import Reviews from "../Reviews/Reviews";

import "./App.css";

function App() {
  return (
    <>
      <Home />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:camperId" element={<ModalCamperInfo />}>
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
