import React, { useRef, useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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

  async function onSubmit(event) {
    event.preventDefault();
    const registered = {
      fullName: fullName,
      company: company,
      contact: contact,
      email: email,
      message: message,
    };

    try {
      const res = await axios.post("/api/signup", registered);
      console.log(res.status); // Log the response status
      console.log(res.data); // Log the response data

      if (res.status === 200) {
        setAfterSubmit("Thank you for getting in touch with me");
      } else {
        setAfterSubmit(`Please try again${res.status}`);
      }

      setFullName("");
      setCompany("");
      setContact("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
      // Handle error
    }
  }

  return (
    <Form ref={form} onSubmit={onSubmit}>
      <Form.Group controlId="fullName">
        <Form.Label>Your Full Name</Form.Label>
        <Form.Control
          type="text"
          name="fullName"
          onChange={handleFullNameChange}
          value={fullName}
          placeholder="Your Full Name"
        />
      </Form.Group>

      <Form.Group controlId="company">
        <Form.Label>Company Name</Form.Label>
        <Form.Control
          type="text"
          name="company"
          onChange={handleCompanyNameChange}
          value={company}
          placeholder="Company Name"
        />
      </Form.Group>

      <Form.Group controlId="contact">
        <Form.Label>Contact No</Form.Label>
        <Form.Control
          type="text"
          name="contact"
          onChange={handleContactNumberChange}
          value={contact}
          placeholder="Contact No"
        />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          onChange={handleEmailAddChange}
          value={email}
          placeholder="Email"
        />
      </Form.Group>

      <Form.Group controlId="message">
        <Form.Label>Your Message</Form.Label>
        <Form.Control
          as="textarea"
          name="message"
          onChange={handleMessageChange}
          value={message}
          placeholder="Your Message"
        />
      </Form.Group>

      <Button type="submit">Submit</Button>
      <p>{afterSubmit}</p>
    </Form>
  );
};

export default ContactForm;
