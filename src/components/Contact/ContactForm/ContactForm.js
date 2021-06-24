import { useState } from "react";
import { Axios, db } from "../../../firebase/firebaseConfig";
import Styles from "./Styles";

const ContactForm = () => {
  const [formData, setFormData] = useState({});

  const updateInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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

  return (
    <Styles>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Imię i nazwisko"
          onChange={updateInput}
          value={formData.name || ""}
        />
        <input
          type="email"
          name="email"
          placeholder="E-Mail"
          onChange={updateInput}
          value={formData.email || ""}
        />
        <textarea
          type="text"
          name="message"
          placeholder="Wiadomość"
          onChange={updateInput}
          value={formData.message || ""}
        ></textarea>
        <button type="submit">Wyślij</button>
      </form>
    </Styles>
  );
};

export default ContactForm;
