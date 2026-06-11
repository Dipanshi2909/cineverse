import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      background: "#111",
      color: "white",
      padding: "15px",
      display: "flex",
      justifyContent: "space-between"
    }}>
      <h2>CineVerse</h2>

      <div>
        <Link to="/dashboard">Dashboard</Link>{" "}
        <Link to="/movies">Movies</Link>
      </div>
    </nav>
  );
}

export default Navbar;