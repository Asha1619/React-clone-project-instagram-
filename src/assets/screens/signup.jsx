import "../style/signup.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Signup() {

  const navigate = useNavigate();
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
        />

        <label>Birthday</label>

        <div className="birthday-row">
          <select>
            <option>Month</option>
          </select>

          <select>
            <option>Day</option>
          </select>

          <select>
            <option>Year</option>
          </select>
        </div>

        <label>Name</label>
        <input
          type="text"
          placeholder="Full name"
          className="input-box"
        />

        <label>Username</label>
        <input
          type="text"
          placeholder="Username"
          className="input-box"
        />
<p className="terms">
  People who use our service may have uploaded your contact information to Instagram.
  <span> Learn more.</span>
</p>

<p className="terms">
  By tapping Submit, you agree to create an account and to Instagram's
  <span> Terms</span>, <span>Privacy Policy</span> and
  <span> Cookies Policy</span>.
</p>

<p className="terms">
  The <span>Privacy Policy</span> describes the ways we can use the information
  we collect when you create an account. For example, we use this information
  to provide, personalize and improve our products, including ads.
</p>

  <button className="signup-btn">
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