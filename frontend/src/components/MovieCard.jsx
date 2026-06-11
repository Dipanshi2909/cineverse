import { Link } from "react-router-dom";

function MovieCard({ title, rating, poster }) {
  return (
    <Link
      to="/movie/1"
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div
        style={{
          width: "220px",
          backgroundColor: "#222",
          borderRadius: "10px",
          overflow: "hidden",
          transition: "0.3s",
        }}
      >
        <img
          src={poster}
          alt={title}
          width="100%"
          height="300"
        />

        <div style={{ padding: "10px", color: "white" }}>
          <h3>{title}</h3>
          <p>⭐ {rating}</p>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;