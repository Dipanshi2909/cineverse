import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <div
      style={{
        backgroundColor: "#141414",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <Navbar />

      <div style={{ padding: "40px" }}>
        <h1>Welcome to CineVerse</h1>

        <h3>Total Movies: 500+</h3>
        <h3>Bookings Made: 12</h3>
        <h3>Watchlist Movies: 8</h3>

        <Link to="/home">
          <button
            style={{
              marginTop: "20px",
              padding: "12px 25px",
              backgroundColor: "#E50914",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            Enter CineVerse
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;