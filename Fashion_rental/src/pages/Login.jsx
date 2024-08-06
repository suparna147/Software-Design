import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Footer, Navbar } from "../components";

const Login = () => {
  // State management for email, password, and errors
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  // Handler functions for input changes
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Handler function for form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation logic
    const newErrors = { email: "", password: "" };
    if (!email) newErrors.email = "Email is required.";
    if (!password) newErrors.password = "Password is required.";
    setErrors(newErrors);

    if (email && password) {
      // Example authentication logic
      console.log("Email:", email);
      console.log("Password:", password);

      // Assuming authentication is successful
      // Replace this with actual authentication logic
      toast.success("Login successful!");

      // Reset form after successful login
      setEmail("");
      setPassword("");
    }
  };

  // Style for fade-in animation
  const fadeInStyle = {
    animation: "fadeIn 1s ease-out forwards",
    opacity: 0,
  };

  return (
    <>
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
      <Navbar />

      <div
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/white-feathered-head-with-feathers-it_1290686-30990.jpg?w=1060')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          padding: "20px",
          overflow: "hidden",
        }}
      >
        <div className="container my-3 py-3" style={fadeInStyle}>
          <h1 className="text-center">Login</h1>
          <hr />
          <div className="row my-4 h-100">
            <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
              <form onSubmit={handleSubmit}>
                <div className="my-3">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={handleEmailChange}
                  />
                  {errors.email && (
                    <div className="text-danger">{errors.email}</div>
                  )}
                </div>
                <div className="my-3">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  {errors.password && (
                    <div className="text-danger">{errors.password}</div>
                  )}
                </div>
                <div className="my-3">
                  <p>
                    New Here?{" "}
                    <Link
                      to="/register"
                      className="text-decoration-underline text-info"
                    >
                      Register
                    </Link>
                  </p>
                </div>
                <div className="text-center">
                  <button
                    className="my-2 mx-auto btn btn-dark"
                    type="submit"
                    style={fadeInStyle}
                    disabled={!email || !password}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default Login;
