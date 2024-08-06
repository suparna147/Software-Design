import React from "react";
import { Footer, Navbar } from "../components";

const ContactPage = () => {
  const fadeInStyle = {
    animation: "fadeIn 1s ease-out forwards",
    opacity: 0, // Set initial opacity to 0 to allow animation
  };

  const fadeInDelayStyle = {
    ...fadeInStyle,
    animationDelay: '0.5s',
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
        <div style={{ color: "white", paddingTop: "50px", paddingLeft: "50px" }}>
          <div className="container my-3 py-3">
            <div
              style={{
                ...fadeInStyle,
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                backdropFilter: "blur(10px)",
                borderRadius: "10px",
                padding: "20px",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              <h1 className="text-center" style={{ color: "black" }}>
                Contact Us
              </h1>
              <hr />
              <div className="row my-4 h-100">
                <div className="col">
                  <form style={fadeInDelayStyle}>
                    <div className="form-group my-3">
                      <label htmlFor="Name" style={{ color: "black" }}>
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="Name"
                        placeholder="Enter your name"
                        style={{
                          width: "100%",
                          padding: "10px",
                        }}
                      />
                    </div>
                    <div className="form-group my-3">
                      <label htmlFor="Email" style={{ color: "black" }}>
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="Email"
                        placeholder="name@example.com"
                        style={{
                          width: "100%",
                          padding: "10px",
                        }}
                      />
                    </div>
                    <div className="form-group my-3">
                      <label htmlFor="Message" style={{ color: "black" }}>
                        Message
                      </label>
                      <textarea
                        rows={5}
                        className="form-control"
                        id="Message"
                        placeholder="Enter your message"
                        style={{
                          width: "100%",
                          padding: "10px",
                        }}
                      />
                    </div>
                    <div className="text-center">
                      <button
                        className="my-2 px-4 mx-auto btn btn-dark"
                        type="submit"
                        disabled
                        style={fadeInDelayStyle}
                      >
                        <b>SEND</b>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
