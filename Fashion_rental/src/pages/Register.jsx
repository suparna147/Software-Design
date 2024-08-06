import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Footer, Navbar } from "../components";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({ name: "", email: "", password: "" });

    const handleNameChange = (e) => setName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        const newErrors = { name: "", email: "", password: "" };
        if (!name) newErrors.name = "Name is required.";
        if (!email) newErrors.email = "Email is required.";
        if (!password) newErrors.password = "Password is required.";
        setErrors(newErrors);

        if (name && email && password) {
            // Example: You can add your backend API call here
            console.log("Name:", name);
            console.log("Email:", email);
            console.log("Password:", password);

            // Notify user of successful registration
            toast.success("Registration successful!");

            // Reset form
            setName("");
            setEmail("");
            setPassword("");
        }
    };

    const fadeInStyle = {
        animation: "fadeIn 1s ease-out forwards",
        opacity: 0, // Initial opacity set to 0 for animation
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
                        "url('https://img.freepik.com/premium-photo/gold-brown-leaves-light-purple-background-with-copy-space_1000823-66559.jpg?w=1060')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "100vh",
                    padding: "20px",
                    overflow: "hidden",
                }}
            >
                <div className="container my-3 py-3" style={fadeInStyle}>
                    <h1 className="text-center">Register</h1>
                    <hr />
                    <div className="row my-4 h-100">
                        <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                            <form onSubmit={handleSubmit}>
                                <div className="form my-3">
                                    <label htmlFor="Name">Full Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="Name"
                                        placeholder="Enter Your Name"
                                        value={name}
                                        onChange={handleNameChange}
                                    />
                                    {errors.name && <div className="text-danger">{errors.name}</div>}
                                </div>
                                <div className="form my-3">
                                    <label htmlFor="Email">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="Email"
                                        placeholder="name@example.com"
                                        value={email}
                                        onChange={handleEmailChange}
                                    />
                                    {errors.email && <div className="text-danger">{errors.email}</div>}
                                </div>
                                <div className="form my-3">
                                    <label htmlFor="Password">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="Password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={handlePasswordChange}
                                    />
                                    {errors.password && <div className="text-danger">{errors.password}</div>}
                                </div>
                                <div className="my-3">
                                    <p>Already have an account? <Link to="/login" className="text-decoration-underline text-info">Login</Link></p>
                                </div>
                                <div className="text-center">
                                    <button className="my-2 mx-auto btn btn-dark" type="submit" disabled={!name || !email || !password}>
                                        Register
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

export default Register;
