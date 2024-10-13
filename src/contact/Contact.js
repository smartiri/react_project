import "../contact/Contact.css";
import { useState } from "react";
import PropTypes from "prop-types";
export default function Contact() {
  const [formData, setFormData] = useState([
    {
      name: "",
      lastname: "",
      email: "",
      subject: "",
      msg: "",
    },
  ]);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    return tempErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };
  return (
    <div id="contact" class="contact-section">
      <form class="contact-form" id="contact_form">
        <h1>Contact Me</h1>
        <div class="align-items">
          <label for="name">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              onChange={handleChange}
            />

            {errors.name && (
              <span class="error" id="name-error">
                {errors.name}
              </span>
            )}
          </label>
          <label for="lastname">
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Lastname"
              onChange={handleChange}
            />
            {errors.lastname && <span class="error" id="name-error"></span>}
          </label>
          <label for="email">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              onChange={handleChange}
            />
            <span class="error" id="email-error"></span>
            {errors.email && (
              <span class="error" id="name-error">
                {errors.name}
              </span>
            )}
          </label>
          <label for="subject">
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
              onChange={handleChange}
            />
            <span class="error" id="subject-error"></span>
            {errors.subject && (
              <span class="error" id="name-error">
                {errors.name}
              </span>
            )}
          </label>
        </div>
        <label for="message">
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            onChange={handleChange}
          ></textarea>
          <span id="msg-error" class="error"></span>
          {errors.msg && (
            <span class="error" id="name-error">
              {errors.name}
            </span>
          )}
        </label>
        {submitted && <p id="success">Form submitted successfully!</p>}
        <input type="submit" value="Submit" id="submit-contact" />
      </form>
    </div>
  );
}

Contact.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  lastname: PropTypes.string,
  subject: PropTypes.string,
  msg: PropTypes.string,
};
