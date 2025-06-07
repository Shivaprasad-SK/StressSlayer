import React from "react";
import { Brain } from "lucide-react";

const Login = ({ setIsLoggedIn }) => (
  <div className="login-bg">
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="login-logo-bg">
            <Brain className="login-logo" />
          </div>
          <h1 className="login-title">Stress Slayer</h1>
          <p className="login-subtitle">
            Your AI-powered mental wellness companion
          </p>
        </div>
        <div className="login-form">
          <input
            type="email"
            placeholder="Enter your email"
            className="login-input"
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="login-input"
          />
          <button onClick={() => setIsLoggedIn(true)} className="login-btn">
            Sign In
          </button>
        </div>
        <div className="login-footer">
          <p className="login-footer-text">Don't have an account?</p>
          <button className="login-signup-btn">Sign Up</button>
        </div>
      </div>
    </div>
  </div>
);

export default Login;
