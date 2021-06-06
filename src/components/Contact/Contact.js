import ContactForm from "./ContactForm/ContactForm";
import styled from "styled-components";

function Contact() {
  const Title = styled.h2`
    text-align: center;
    font-size: 2rem;
    &:before,
    &:after {
      content: "";
      display: block;
      width: 200px;
      height: 3px;
      margin: 0 auto;
      background: #cf5c36;
    }
  `;

  return (
    <div style={{ padding: "80px 20%" }}>
      <Title>Kontakt</Title>
      <ContactForm />
    </div>
  );
}

export default Contact;
