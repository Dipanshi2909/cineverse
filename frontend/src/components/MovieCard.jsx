import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <div
      style={{
        width: "220px",
        backgroundColor: "#222",
        borderRadius: "10px",
        overflow: "hidden",
        color: "white",
      }}
    >
      <img
        src={movie.poster}
        alt={movie.title}
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "10px" }}>
        <h3>{movie.title}</h3>
        <p>⭐ {movie.rating}</p>

        <Link to={`/movie/${movie.id}`}>
          <button
            style={{
              padding: "8px 12px",
              backgroundColor: "#E50914",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}