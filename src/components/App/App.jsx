import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "../Navigation/Navigation";
import Loader from "../Loader/Loader";

import "./App.css";

const Home = lazy(() => import("../../pages/Home/Home"));
const Catalog = lazy(() => import("../../pages/Catalog/Catalog"));
const Favorites = lazy(() => import("../../pages/Favorites/Favorites"));
const NotFound = lazy(() => import("../../pages/NotFound/NotFound"));
const Features = lazy(() => import("../Features/Features"));
const Reviews = lazy(() => import("../Reviews/Reviews"));
const CamperModalInfo = lazy(() =>
  import("../CamperModalInfo/CamperModalInfo")
);

function App() {
  return (
    <main>
      <Navigation />

      <Suspense fallback={<Loader />}>
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
      </Suspense>
    </main>
  );
}

export default App;
