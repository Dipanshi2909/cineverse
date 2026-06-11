import Navbar from "../components/Navbar";

function Watchlist() {
  return (
    <div
      style={{
        backgroundColor: "#141414",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <Navbar />

      <div style={{ padding: "30px" }}>
        <h1>My Watchlist</h1>
        <p>No movies added yet.</p>
      </div>
    </div>
  );
}

export default Watchlist;