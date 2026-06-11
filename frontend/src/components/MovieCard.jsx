import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div
      style={{
        width: "220px",
        transition: "0.3s",
      }}
    >
      <img
        src={movie.poster}
        alt={movie.title}
        style={{
          width: "100%",
          height: "320px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />

      <h3 style={{ color: "white" }}>{movie.title}</h3>

      <p style={{ color: "white" }}>
        Rating: {movie.rating}
      </p>

      <Link to={`/movie/${movie.id}`}>
        <button
          style={{
            backgroundColor: "#E50914",
            color: "white",
            border: "none",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          View Details
        </button>
      </Link>
    </div>
  );
}

export default MovieCard;