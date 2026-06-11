import MovieCard from "../components/MovieCard";

function MovieCatalog() {
  const movies = [
    { id: 1, title: "Interstellar", rating: 8.6 },
    { id: 2, title: "Inception", rating: 8.8 },
    { id: 3, title: "Avengers Endgame", rating: 8.4 }
  ];

  return (
    <div>
      <h1>Movie Catalog</h1>

      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          rating={movie.rating}
        />
      ))}
    </div>
  );
}

export default MovieCatalog;