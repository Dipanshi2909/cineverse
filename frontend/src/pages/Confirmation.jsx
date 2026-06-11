import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Confirmation() {
  return (
    <div
      style={{
        backgroundColor: "#141414",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <Navbar />

      <div
        style={{
          textAlign: "center",
          paddingTop: "100px",
        }}
      >
        <h1>✅ Booking Successful</h1>

        <h2>Movie: Interstellar</h2>

        <h3>Seats: A1, A2, A3</h3>

        <h3>Show Time: 6:00 PM</h3>

        <h3>Booking ID: CV12345</h3>

        <Link to="/">
          <button
            style={{
              marginTop: "20px",
              padding: "12px 25px",
              backgroundColor: "#E50914",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Confirmation;