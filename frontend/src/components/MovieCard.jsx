function MovieCard({ title, rating }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>Rating: {rating}</p>
      <hr />
    </div>
  );
}

export default MovieCard;