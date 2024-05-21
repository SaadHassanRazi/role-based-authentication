import React, { useState } from "react";
import { useAuth } from "../authContext/AuthProvider";

function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "student", // Default role
  });
  const auth = useAuth();

  const submitHandler = (e) => {
    e.preventDefault();
    if (input.email !== "" && input.password !== "") {
      auth.loginAction(input);
    } else {
      alert("Please provide valid credentials");
    }
  };

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          name="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={inputHandler}
          value={input.email}
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          name="password"
          className="form-control"
          id="exampleInputPassword1"
          onChange={inputHandler}
          value={input.password}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Role</label>
        <div>
          <input
            type="radio"
            id="student"
            name="role"
            value="student"
            checked={input.role === "student"}
            onChange={inputHandler}
          />
          <label htmlFor="student">Student</label>
        </div>
        <div>
          <input
            type="radio"
            id="admin"
            name="role"
            value="admin"
            checked={input.role === "admin"}
            onChange={inputHandler}
          />
          <label htmlFor="admin">Admin</label>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default Login;
