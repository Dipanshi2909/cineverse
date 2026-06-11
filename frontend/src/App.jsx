import { BrowserRouter, Routes, Route } from "react-router-dom";

// Authentication Pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// Main Pages
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import MovieCatalog from "./pages/MovieCatalog";
import MovieDetails from "./pages/MovieDetails";
import Watchlist from "./pages/Watchlist";
import Profile from "./pages/Profile";

// Booking Flow
import Booking from "./pages/Booking";
import SeatSelection from "./pages/SeatSelection";
import Payment from "./pages/Payment";
import Confirmation from "./pages/Confirmation";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Authentication */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Main Application */}
        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<MovieCatalog />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/profile" element={<Profile />} />

        {/* Booking Flow */}
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/seats/:id" element={<SeatSelection />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/confirmation" element={<Confirmation />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;