import { useState } from "react";
import { validateEmail } from "../utils/validation";
import { submitForm } from "../utils/api";
import "../styles/styles.css";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    const validationError = validateEmail(email);
    if (validationError) {
      setError(validationError);
      return;
    }

    const response = await submitForm(email);
    if (response.success) {
      setMessage(response.message);
      setEmail("");
    } else {
      setError(response.message);
    }
  };

  return (
    <div className="form-container">
      {!message && <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="input"
        />

        <button type="submit" className="button">
          Contact Me
        </button>
      </form>}
        {error && <p className="error">{error}</p>}
        {message && <p className="success">{message}</p>}
    </div>
  );
};

export default ContactForm;
