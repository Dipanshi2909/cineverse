import Navbar from "../components/Navbar";

function Profile() {
  return (
    <div
      style={{
        backgroundColor: "#141414",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <Navbar />

      <div style={{ padding: "40px" }}>
        <h1>User Profile</h1>

        <h3>Name: Deepanshi Sharma</h3>

        <h3>Email: user@example.com</h3>

        <h3>Total Bookings: 12</h3>

        <h3>Watchlist Movies: 8</h3>
      </div>
    </div>
  );
}

export default Profile;