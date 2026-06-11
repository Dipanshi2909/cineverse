import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

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
        <h1 style={{ color: "white", textAlign: "center" }}>
          CineVerse Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
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
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#E50914",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Login
        </button>

        <p
          style={{
            color: "white",
            marginTop: "15px",
            textAlign: "center",
          }}
        >
          New User? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;