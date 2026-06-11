import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Booking() {
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
          padding: "40px",
        }}
      >
        <h1>Book Tickets</h1>

        <h2>Interstellar</h2>

        <h3>Select Date</h3>

        <div
          style={{
            display: "flex",
            gap: "15px",
            marginBottom: "30px",
          }}
        >
          <button>12 Jun</button>
          <button>13 Jun</button>
          <button>14 Jun</button>
        </div>

        <h3>Select Time</h3>

        <div
          style={{
            display: "flex",
            gap: "15px",
            marginBottom: "30px",
          }}
        >
          <button>10:00 AM</button>
          <button>2:00 PM</button>
          <button>6:00 PM</button>
          <button>9:00 PM</button>
        </div>

        <Link to="/seats/1">
          <button
            style={{
              padding: "12px 25px",
              backgroundColor: "#E50914",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Booking;