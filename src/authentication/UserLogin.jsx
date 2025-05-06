import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MailIcon, LockIcon } from 'lucide-react';
import axios from 'axios';
import './authenstyles/login.css'; 
import config from '../config'; 

const UserLoginPage = () => { // ✅ Name same as export
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); 
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // clear previous errors

    try {
      const response = await axios.post(`${config.url}/login`, {
        email,
        password,
      });

      console.log(response.data);

      if (response.data.success) {
        // If needed, save token or user data
        // localStorage.setItem('token', response.data.token);

        navigate('/'); // redirect after successful login
      } else {
        setError('Login failed! Please check your credentials. 🔥');
      }
    } catch (error) {
      console.error(error);
      setError('Server problem! Try again later 🥲');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-background">
      <div className="login-container">
        <h2 className="login-title">Welcome Back!</h2>

        {error && <p className="error-message">{error}</p>}

        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-group">
            <MailIcon size={20} className="input-icon" />
            <input
              type="email"
              placeholder="Email"
              className="login-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <LockIcon size={20} className="input-icon" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="show-password-toggle">
            <input 
              type="checkbox" 
              id="showPassword" 
              onChange={() => setShowPassword(!showPassword)} 
            />
            <label htmlFor="showPassword"> Show Password</label>
          </div>

          <button type="submit" className="login-button" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="register-text">
          Don't have an account? <Link to="/register" className="register-link">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default UserLoginPage; // ✅ Correct export
