import { useState } from "react";
import Navbar from "../components/Navbar";

function SeatSelection() {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const seats = [];

  for (let i = 1; i <= 30; i++) {
    seats.push(i);
  }

  const handleSeatClick = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(
        selectedSeats.filter((s) => s !== seat)
      );
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const totalPrice = selectedSeats.length * 250;

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
        <h1>Select Seats</h1>

        <div
          style={{
            backgroundColor: "white",
            color: "black",
            textAlign: "center",
            padding: "10px",
            marginBottom: "30px",
            borderRadius: "5px",
          }}
        >
          SCREEN
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 60px)",
            gap: "15px",
            marginBottom: "30px",
          }}
        >
          {seats.map((seat) => (
            <button
              key={seat}
              onClick={() => handleSeatClick(seat)}
              style={{
                height: "50px",
                border: "none",
                cursor: "pointer",
                borderRadius: "5px",
                backgroundColor: selectedSeats.includes(seat)
                  ? "#E50914"
                  : "#333",
                color: "white",
              }}
            >
              {seat}
            </button>
          ))}
        </div>

        <h3>
          Selected Seats:{" "}
          {selectedSeats.length > 0
            ? selectedSeats.join(", ")
            : "None"}
        </h3>

        <h2>Total Price: ₹{totalPrice}</h2>

        <button
          style={{
            padding: "12px 25px",
            backgroundColor: "#E50914",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}

export default SeatSelection;