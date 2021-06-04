import styled from "styled-components";

function Gallery() {
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
      <Title>Galeria</Title>
    </div>
  );
}

export default Gallery;
