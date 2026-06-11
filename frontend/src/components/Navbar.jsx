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
      }}
    >
      <h2 style={{ color: "#E50914" }}>CineVerse</h2>

      <div style={{ display: "flex", gap: "25px" }}>
        <Link
          to="/"
          style={{ color: "white", textDecoration: "none" }}
        >
          Home
        </Link>

        <Link
          to="/movies"
          style={{ color: "white", textDecoration: "none" }}
        >
          Movies
        </Link>

        <Link
          to="/watchlist"
          style={{ color: "white", textDecoration: "none" }}
        >
          Watchlist
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;