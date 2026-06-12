import "../style/signup.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = () => {

    if (
      email === "" ||
      password === "" ||
      birthday === "" ||
      name === "" ||
      username === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    const userdata =
      JSON.parse(localStorage.getItem("userdata")) || [];

    userdata.push({
      email,
      password,
      birthday,
      name,
      username
    });

    localStorage.setItem(
      "userdata",
      JSON.stringify(userdata)
    );

    alert("Signup Successful");

    navigate("/");
  };

  return (
    <div className="signup-container">

      <div className="signup-form">

        <Link to="/" className="back-btn">
          ←
        </Link>

        <h3 className="meta">Meta</h3>

        <h1>Get started on Instagram</h1>

        <p className="subtitle">
          Sign up to see photos and videos from your friends.
        </p>

        <label>Mobile number or email</label>

        <input
          type="text"
          placeholder="Mobile number or email"
          className="input-box"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <p className="info-text">
          You may receive notifications from us.
          <span> Learn why we ask for your contact information</span>
        </p>

        <label>Password</label>

        <input
          type="password"
          placeholder="Password"
          className="input-box"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label>Birthday</label>

        <input
          type="date"
          className="input-box"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
        />

        <label>Name</label>

        <input
          type="text"
          placeholder="Full name"
          className="input-box"
          value={name}
          onChange={(e) => {

            const value = e.target.value;

            if (/^[A-Za-z ]*$/.test(value)) {
              setName(value);
            }

          }}
        />

        <label>Username</label>

        <input
          type="text"
          placeholder="Username"
          className="input-box"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <p className="terms">
          People who use our service may have uploaded your contact information to Instagram.
          <span> Learn more.</span>
        </p>

        <p className="terms">
          By tapping Submit, you agree to create an account and to Instagram's
          <span> Terms</span>,
          <span> Privacy Policy</span> and
          <span> Cookies Policy</span>.
        </p>

        <button
          className="signup-btn"
          onClick={handleSubmit}
        >
          Submit
        </button>

        <button
          className="account-btn"
          onClick={() => navigate("/")}
        >
          I already have an account
        </button>

      </div>

    </div>
  );
}

export default Signup;