import Navbar from "../components/Navbar";

function MovieDetails() {
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
        <h1>Interstellar</h1>

        <img
          src="https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
          alt="Interstellar"
          width="300"
        />

        <p style={{ marginTop: "20px" }}>
          A team of explorers travel through a wormhole in space in an
          attempt to ensure humanity's survival.
        </p>

        <h3>⭐ Rating: 8.6</h3>

        <button>▶ Play Trailer</button>
      </div>
    </div>
  );
}

export default MovieDetails;