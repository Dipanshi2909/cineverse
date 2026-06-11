import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  if (!movie) return null;

  return (
    <div className="card">
      <img
        src={movie.poster}
        alt={movie.title}
        style={{ width: "100%", height: "250px", objectFit: "cover" }}
      />

      <h3>{movie.title}</h3>

      <Link to={`/movie/${movie._id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
}