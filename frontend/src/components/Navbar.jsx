import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#141414",
        padding: "15px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <h2 style={{ color: "#E50914" }}>CineVerse</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Home
        </Link>

        <Link
          to="/movies"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Movies
        </Link>

        <Link
          to="/watchlist"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Watchlist
        </Link>
      </div>

      <input
        type="text"
        placeholder="Search Movies..."
        style={{
          padding: "8px",
          borderRadius: "5px",
          border: "none",
          width: "220px",
        }}
      />
    </nav>
  );
}

export default Navbar;