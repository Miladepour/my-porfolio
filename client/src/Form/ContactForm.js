import React, { useRef, useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const form = useRef();

  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [afterSubmit, setAfterSubmit] = useState("");

  function handleFullNameChange(event) {
    setFullName(event.target.value);
  }
  function handleCompanyNameChange(event) {
    setCompany(event.target.value);
  }
  function handleContactNumberChange(event) {
    setContact(event.target.value);
  }
  function handleEmailAddChange(event) {
    setEmail(event.target.value);
  }
  function handleMessageChange(event) {
    setMessage(event.target.value);
  }

  function onSubmit(event) {
    event.preventDefault();
    const registered = {
      fullName: fullName,
      company: company,
      contact: contact,
      email: email,
      message: message,
    };
    axios
      .post("http://localhost:4000/api/signup", registered)
      .then((res) => {
        console.log(res.data);
        res.status === 200
          ? setAfterSubmit("Thank you for getting in touch with me")
          : setAfterSubmit(`Please try again${res.status}`);
        setFullName("");
        setCompany("");
        setContact("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => console.error(error));
  }

  return (
    <form ref={form} onSubmit={onSubmit} className="contactForm">
      <h3 className="formTitle">
        Feel free to contact me by filling out the following form
      </h3>
      <label className="form__label"></label>
      <input
        type="text"
        name="fullName"
        onChange={handleFullNameChange}
        value={fullName}
        className="form__field"
        placeholder="Your Full Name"
      />
      <label className="form__label"></label>
      <input
        type="text"
        name="company"
        onChange={handleCompanyNameChange}
        value={company}
        className="form__field"
        placeholder="Company Name"
      />
      <label className="form__label"></label>
      <input
        type="text"
        name="contact"
        onChange={handleContactNumberChange}
        value={contact}
        className="form__field"
        placeholder="Contact No"
      />
      <label className="form__label"></label>
      <input
        type="email"
        name="email"
        onChange={handleEmailAddChange}
        value={email}
        className="form__field"
        placeholder="Email"
      />
      <label className="form__label"></label>
      <textarea
        name="message"
        onChange={handleMessageChange}
        value={message}
        className="form__field"
        placeholder="Your Message"
      />
      <input type="submit" value="Sumbit" className="formBtn" />
      <p>{afterSubmit}</p>
    </form>
  );
};

export default ContactForm;
