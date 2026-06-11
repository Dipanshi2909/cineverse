import Navbar from "../components/Navbar";

function SeatSelection() {
  const seats = [];

  for (let i = 1; i <= 30; i++) {
    seats.push(i);
  }

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
          }}
        >
          SCREEN
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 60px)",
            gap: "15px",
          }}
        >
          {seats.map((seat) => (
            <button
              key={seat}
              style={{
                height: "50px",
                backgroundColor: "#333",
                color: "white",
                border: "1px solid white",
                cursor: "pointer",
              }}
            >
              {seat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SeatSelection;