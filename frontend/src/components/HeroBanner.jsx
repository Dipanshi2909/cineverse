function HeroBanner() {
  return (
    <div
      style={{
        height: "80vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        padding: "50px",
        color: "white",
      }}
    >
      <div>
        <h1 style={{ fontSize: "4rem" }}>CineVerse Originals</h1>

        <p style={{ maxWidth: "600px" }}>
          Watch trending movies, book tickets and explore cinema like never
          before.
        </p>

        <button
          style={{
            padding: "12px 25px",
            backgroundColor: "#E50914",
            color: "white",
            border: "none",
            marginRight: "10px",
          }}
        >
          Play
        </button>

        <button
          style={{
            padding: "12px 25px",
            backgroundColor: "#444",
            color: "white",
            border: "none",
          }}
        >
          More Info
        </button>
      </div>
    </div>
  );
}

export default HeroBanner;