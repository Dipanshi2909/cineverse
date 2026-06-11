import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import MovieCatalog from "./pages/MovieCatalog";
import MovieDetails from "./pages/MovieDetails";
import Watchlist from "./pages/Watchlist";
import Booking from "./pages/Booking";
import SeatSelection from "./pages/SeatSelection";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MovieCatalog />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/seats/:id" element={<SeatSelection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;