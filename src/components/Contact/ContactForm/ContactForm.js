import { useState } from "react";
import { Axios, db } from "../../../firebase/firebaseConfig";
import styled from "styled-components";

const ContactForm = () => {
  const [formData, setFormData] = useState({});

  const updateInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendEmail();
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    alert("Wiadomość wysłana");
  };

  const sendEmail = () => {
    Axios.post(
      "https://us-central1-rusty-curls.cloudfunctions.net/submit",
      formData
    )
      .then((res) => {
        db.collection("emails").add({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date(),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const Form = styled.form`
    display: table;
    margin: 40px auto;
  `;

  const Input = styled.input`
    font: 18px "Nunito", sans-serif;
    box-sizing: border-box;
    display: block;
    border: none;
    padding: 20px;
    width: 300px;
    margin-bottom: 20px;
    outline: none;
    transition: all 0.3s ease-in-out;
    &:placeholder {
      transition: all 0.2s ease-in-out;
      color: #999;
      font: 18px "Nunito", sans-serif;
    }

    &:focus,
    &.populated {
      padding-top: 28px;
      padding-bottom: 12px;

      &:placeholder {
        color: transparent;
      }
    }
  `;

  const TextArea = styled(Input)`
    height: 200px;
  `;

  const Button = styled.button`
    transition: all 0.3s ease-in-out;
    font: 18px "Nunito", sans-serif;
    border: none;
    background: #cf5c36;
    color: #f4e3b2;
    padding: 20px;
    width: 100%;
    text-transform: uppercase;
    letter-spacing: 5px;
    &:hover {
      background: #f4e3b2;
      color: #cf5c36;
      cursor: pointer;
    }
  `;

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Imię i nazwisko"
          onChange={updateInput}
          value={formData.name || ""}
        />
        <Input
          type="email"
          name="email"
          placeholder="E-Mail"
          onChange={updateInput}
          value={formData.email || ""}
        />
        <TextArea
          as="textarea"
          type="text"
          name="message"
          placeholder="Wiadomość"
          onChange={updateInput}
          value={formData.message || ""}
        ></TextArea>
        <Button type="submit">Wyślij</Button>
      </Form>
    </>
  );
};

export default ContactForm;
