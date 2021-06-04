import styled from "styled-components";

function About() {
  const Div = styled.div`
    padding: 80px 20%;
  `;

  const Title = styled.h2`
    text-align: center;
    font-size: 2rem;
    &:before,
    &:after {
      content: "";
      display: block;
      width: 300px;
      height: 3px;
      margin: 0 auto;
      background: #cf5c36;
    }
  `;

  return (
    <Div>
      <Title>O hodowli i o nas</Title>
    </Div>
  );
}

export default About;
