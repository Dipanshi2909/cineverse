function MovieCard({ title, rating }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "15px",
        width: "200px",
        margin: "10px"
      }}
    >
      <img
        src="https://via.placeholder.com/200x250"
        alt={title}
      />

      <h3>{title}</h3>
      <p>⭐ {rating}</p>
    </div>
  );
}

export default MovieCard;