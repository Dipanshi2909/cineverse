function MovieCard({ title, rating }) {
  return (
    <div
      style={{
        width: "220px",
        backgroundColor: "#222",
        borderRadius: "10px",
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      <img
        src="https://via.placeholder.com/220x300"
        alt={title}
        width="100%"
      />

      <div style={{ padding: "10px" }}>
        <h3>{title}</h3>
        <p>⭐ {rating}</p>
      </div>
    </div>
  );
}

export default MovieCard;