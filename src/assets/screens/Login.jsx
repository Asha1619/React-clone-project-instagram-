import { useState } from "react";
import "../style/Login.css";
import { Link, useNavigate } from "react-router-dom";
import banner from "../images/insta-banner.png";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {

    if (email.trim() === "" || password.trim() === "") {
      alert("Please enter Email and Password");
      return;
    }

    const userdata =
      JSON.parse(localStorage.getItem("userdata")) || [];

    const user = userdata.find(
      (u) =>
        u.email === email &&
        u.password === password
    );

    if (user) {
      alert("Login Successful");
      navigate("/home");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <>
      <div className="main-container">

        <div className="left-section">
          <img
            src={banner}
            alt="banner"
            className="banner-image"
          />
        </div>

        <div className="right-section">

          <div className="login-box">

            <h2>Log into Instagram</h2>

            <input
              type="text"
              placeholder="Mobile number, username or email"
              className="input-box"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className="input-box"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              className="login-btn"
              onClick={handleSubmit}
            >
              Log in
            </button>

            <p className="forgot">
              Forgot password?
            </p>

            <div className="divider">
              <hr />
              <span>OR</span>
              <hr />
            </div>

            <button className="facebook-btn">
              Log in with Facebook
            </button>

            <Link to="/signup">
              <button className="create-btn">
                Create new account
              </button>
            </Link>

          </div>

        </div>

      </div>

      <footer className="footer">

        <div className="footer-links">
          <a href="#">Meta</a>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Jobs</a>
          <a href="#">Help</a>
          <a href="#">API</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>

        <div className="footer-copyright">
          <span>English ▼</span>
          <span>© 2026 Instagram from Meta</span>
        </div>

      </footer>
    </>
  );
}

export default Login;