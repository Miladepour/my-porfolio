import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
import axios from "axios";

const ContactForm = () => {
  const form = useRef();

  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_v5dlkf3",
  //       "template_npy73kb",
  //       form.current,
  //       "CXlZ1TkTy4STyR66N"
  //     )
  //     .then(
  //       (result) => {
  //         e.target.reset();
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };
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
      .then((res) => console.log(res.data));
  }

  return (
    <form ref={form} onSubmit={onSubmit} className="contactForm">
      <label>Name</label>
      <input
        type="text"
        name="fullName"
        onChange={handleFullNameChange}
        value={fullName}
        placeholder="Enter your full name"
      />
      <label>Company</label>
      <input
        type="text"
        name="company"
        onChange={handleCompanyNameChange}
        value={company}
      />
      <label>Contact No</label>
      <input
        type="text"
        name="contact"
        onChange={handleContactNumberChange}
        value={contact}
      />
      <label>Email</label>
      <input
        type="email"
        name="email"
        onChange={handleEmailAddChange}
        value={email}
      />
      <label>Message</label>
      <textarea name="message" onChange={handleMessageChange} value={message} />
      <input type="submit" value="Sumbit" />
    </form>
  );
};

export default ContactForm;
