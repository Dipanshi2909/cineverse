import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Payment() {
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
          maxWidth: "500px",
          margin: "50px auto",
          backgroundColor: "#222",
          padding: "30px",
          borderRadius: "10px",
        }}
      >
        <h1>Payment</h1>

        <h3>Movie: Interstellar</h3>
        <h3>Seats: A1, A2, A3</h3>
        <h3>Total Amount: ₹750</h3>

        <input
          type="text"
          placeholder="Card Number"
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "15px",
            marginBottom: "15px",
            borderRadius: "5px",
            border: "none",
          }}
        />

        <input
          type="text"
          placeholder="Expiry Date (MM/YY)"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "5px",
            border: "none",
          }}
        />

        <input
          type="password"
          placeholder="CVV"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            borderRadius: "5px",
            border: "none",
          }}
        />

        <Link to="/confirmation">
          <button
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#E50914",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Pay Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Payment;