import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "./userSlice";

function LoginForm({ history }) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const error = useSelector((state) => state.user.signupError);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ user, password }, history));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Enter email or username"
        required
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Enter password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      {error && <div style={{ color: "red" }}>{error.message}</div>}
      <br />
      <button type="submit">Submit</button>
      <br />
      <br />
      <Link to="/signup">Don't have an account?</Link>
    </form>
  );
}

export default LoginForm;
