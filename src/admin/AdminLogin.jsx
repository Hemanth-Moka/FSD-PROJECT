import React from "react";
import "../authentication/authenstyles/login.css"; 

export default function UserLogin() {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />
        </div>
        <button type="submit">Login</button>
        <p className="login-footer">
          Don't have an account? <a href="/register">Register</a>
        </p>
      </form>
    </div>
  );
}
