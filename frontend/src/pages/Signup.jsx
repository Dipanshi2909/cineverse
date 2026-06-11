import { Link } from "react-router-dom";

function Signup() {
  return (
    <div
      style={{
        backgroundColor: "#141414",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#222",
          padding: "30px",
          borderRadius: "10px",
          width: "350px",
        }}
      >
        <h1 style={{ color: "white" }}>Sign Up</h1>

        <input
          type="text"
          placeholder="Full Name"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "10px",
          }}
        />

        <input
          type="email"
          placeholder="Email"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "10px",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
          }}
        />

        <button
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#E50914",
            color: "white",
            border: "none",
          }}
        >
          Create Account
        </button>

        <p style={{ color: "white", marginTop: "15px" }}>
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;