import { Routes, Route } from "react-router-dom";
import Modal from "react-modal";

import Home from "../../pages/Home/Home";
import Catalog from "../../pages/Catalog/Catalog";
import Favorites from "../../pages/Favorites/Favorites";
import NotFound from "../../pages/NotFound/NotFound";
import Features from "../Features/Features";
import Reviews from "../Reviews/Reviews";
import CamperModalInfo from "../CamperModalInfo/CamperModalInfo";

import "./App.css";
import ModalWindow from "../ModalWindow/ModalWindow";

Modal.setAppElement("#root");

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route
          path="/catalog/:camperId"
          element={
            <ModalWindow>
              <CamperModalInfo />
            </ModalWindow>
          }
        >
          <Route
            path="features"
            element={
              <ModalWindow>
                <Features />
              </ModalWindow>
            }
          />
          <Route
            path="reviews"
            element={
              <ModalWindow>
                <Reviews />
              </ModalWindow>
            }
          />
        </Route>
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
