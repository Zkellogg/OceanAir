import React, { useState } from "react";
import "../CSS/Contact.css";

function Contact() {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  return (
    <div className="contact">
      <h2>
        <strong>Contact Us</strong>
      </h2>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">
            <strong>Name:</strong>
          </label>
          <input type="text" className="form-control" id="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">
            <strong>Email:</strong>
          </label>
          <input type="email" className="form-control" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">
            <strong>Message:</strong>
          </label>
          <textarea className="form-control" rows="5" id="message" required />
        </div>
        <button type="submit" className="btn btn-primary">
          {status}
        </button>
      </form>
    </div>
  );
}

export default Contact;
