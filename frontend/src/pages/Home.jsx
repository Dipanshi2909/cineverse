import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import MovieCard from "../components/MovieCard";

function Home() {
  const trending = [
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
      <HeroBanner />

      <div style={{ padding: "30px" }}>
        <h2 style={{ color: "white" }}>Trending Now</h2>

        <div
          style={{
            display: "flex",
            gap: "20px",
            overflowX: "auto",
            paddingTop: "15px",
          }}
        >
          {trending.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              rating={movie.rating}
              poster={movie.poster}
            />
          ))}
        </div>

        <h2 style={{ color: "white", marginTop: "40px" }}>
          Top Rated
        </h2>

        <div
          style={{
            display: "flex",
            gap: "20px",
            overflowX: "auto",
            paddingTop: "15px",
          }}
        >
          {trending.map((movie) => (
            <MovieCard
              key={movie.id + 10}
              title={movie.title}
              rating={movie.rating}
              poster={movie.poster}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;