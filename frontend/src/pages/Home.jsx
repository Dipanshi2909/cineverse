import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";

function Home() {
  return (
    <div
      style={{
        backgroundColor: "#141414",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <HeroBanner />
    </div>
  );
}

export default Home;