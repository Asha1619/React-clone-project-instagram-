import { useState } from "react";
import "../style/Login.css";
import { Link } from "react-router-dom";
import banner from "../images/insta-banner.png";
import { useNavigate} from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate=useNavigate()

  const handlesubmit = () => {
    const user = {
      email,
      password,
    };

    const existinguser =
      JSON.parse(localStorage.getItem("UserData")) || [];

    existinguser.push(user);

    localStorage.setItem(
      "UserData",
      JSON.stringify(existinguser)
    );

    alert("User registered");
    navigate('./Home')
  };

  return (
    <>
      <div className="main-container">
        <div className="left-section">
          <img src={banner} alt="banner" className="banner-image" />
        </div>

        <div className="right-section">
          <div className="login-box">
            <h2>Log into Instagram</h2>

            <input
              type="text"
              placeholder="Mobile number, username or email"
              className="input-box"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className="input-box"
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* <Link to="/home"> */}
              <button
                className="login-btn"
                onClick={handlesubmit}
              >
                Log in
              </button>
            {/* </Link> */}

            <p className="forgot">Forgot password?</p>

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