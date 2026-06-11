import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";

function MovieCatalog() {
  const movies = [
    {
      id: 1,
      title: "Interstellar",
      rating: 8.6,
      poster:
        "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    },
    {
      id: 2,
      title: "Inception",
      rating: 8.8,
      poster:
        "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
    },
    {
      id: 3,
      title: "Oppenheimer",
      rating: 8.7,
      poster:
        "https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg",
    },
    {
      id: 4,
      title: "Joker",
      rating: 8.5,
      poster:
        "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#141414",
        minHeight: "100vh",
      }}
    >
      <Navbar />

      <div style={{ padding: "30px" }}>
        <h1 style={{ color: "white" }}>Movie Catalog</h1>

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            marginTop: "20px",
          }}
        >
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieCatalog;