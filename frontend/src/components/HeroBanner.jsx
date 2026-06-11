import React from "react";

function HeroBanner() {
  return (
    <div
      style={{
        height: "80vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        display: "flex",
        alignItems: "center",
        padding: "0 50px",
      }}
    >
      <div>
        <h1 style={{ fontSize: "4rem", marginBottom: "10px" }}>
          Interstellar
        </h1>

        <p
          style={{
            width: "500px",
            fontSize: "18px",
            marginBottom: "20px",
          }}
        >
          A team of explorers travel through a wormhole in space in an attempt
          to ensure humanity's survival.
        </p>

        <button
          style={{
            padding: "10px 25px",
            marginRight: "10px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          ▶ Play
        </button>

        <button
          style={{
            padding: "10px 25px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          More Info
        </button>
      </div>
    </div>
  );
}

export default HeroBanner;