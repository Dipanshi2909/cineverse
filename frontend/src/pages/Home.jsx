import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <Navbar />

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
          paddingLeft: "50px",
        }}
      >
        <div>
          <h1 style={{ fontSize: "4rem" }}>Interstellar</h1>
          <p>A team travels through a wormhole in space.</p>

          <button>▶ Play</button>
          <button style={{ marginLeft: "10px" }}>ℹ More Info</button>
        </div>
      </div>
    </div>
  );
}

export default Home;