import axios from 'axios';
import { useState } from 'react';
import "./authenstyles/Registration.css"; // Import your CSS file

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4444/auth/user/register', {
        name,
        email,
        password,
      });

      console.log(response.data);
      alert('Registration Successful 🎉');
    } catch (error) {
      console.error(error);
      alert('Server Problem 😭');
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>

        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Register</button>

        <p className="register-footer">
          Already have an account? <a href="/userlogin">Login</a>
        </p>
      </form>
    </div>
  );
}
