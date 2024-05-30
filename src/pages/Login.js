import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";

function Login() {
  const [showForm, setShowForm] = useState(true);

  const handleLogin = () => {
    setShowForm(true);
  };

  const handleSignup = () => {
    setShowForm(false);
  }

  return (
    <div className="login">
      <video autoPlay loop className="video">
        <source src="https://www.futbolemotion.com/imagesEstructura/login/sportsemotion.webm" />
      </video>

      <div className="form-login">
        <div className="container">
          <div className="fixed-links">
            <ul>
              <Link className="link" 
                    onClick={handleLogin}
                    style={{wordBreak:"keep-all", textAlignLast:"center", width:"270px"}}>
                        DON'T YOU HAVE AN ACCOUNT YET?
              </Link>
              <Link className="link" to="#" onClick={handleSignup}>
                ARE YOU A NEW CLIENT?
              </Link>
            </ul>
          </div>

          {showForm ? (
            <form>
              <div className="form-group">
                <label>Email address</label> <br />
                <input type="email" placeholder="email" />
              </div>

              <div className="form-group">
                <div style={{ marginTop: "-5rem" }}>
                  <label>Password</label> <br />
                  <input type="password" placeholder="password" />
                </div>
              </div>

              <div className="inline">
                <button>
                  <Link to="/homepage" className="btn">
                    Log in
                  </Link>
                </button>
                <Link style={{
                    textDecoration: "none",
                    color: "black",
                    fontWeight: "600"}}> Forgot your password? </Link>
              </div>
            </form>
          ) : (
            <div>
              <p style={{margin:'7rem 1.5rem'}}>
                Welcome to our passion. By registering on our site, you are
                creating a centralized account that will give you access to all
                <span style={{ fontWeight: "bold" }}> Sports Emotion </span>
                platforms using the same login credentials.
              </p>

              <form style={{marginTop: '-6rem'}}>
              <div className="form-group">
                <label>Email address</label> <br />
                <input type="email" placeholder="email" />
              </div>

              <div className="form-group">
                <div style={{ marginTop: "-5rem" }}>
                  <label>Password</label> <br />
                  <input type="password" placeholder="password" />
                </div>
              </div>

              <div className="form-group">
                <div style={{ marginTop: "-6rem" }}>
                  <label> Confirm Password</label> <br />
                  <input type="password" placeholder="password" />
                </div>
              </div>

            <div style={{margin:'-2rem 1.4rem 1.3rem'}}>
                <div className="checkbox">
                  <input type="checkbox" id="newsletter" />
                  <label htmlFor="newsletter">
                    Would you like to receive Sports Emotion newsletters personalized for you?
                  </label>
                </div>

                <div className="checkbox">
                  <input type="checkbox" id="terms" />
                  <label htmlFor="terms">
                    I accept the <Link to="#">General Terms and Conditions</Link> of Sports Emotion
                  </label>
                </div>
            </div>
              
              
                <button style={{width:'39rem', marginLeft:'1rem'}}>
                  <Link to="/homepage" className="btn">
                    Register
                  </Link>
                </button>
            </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
