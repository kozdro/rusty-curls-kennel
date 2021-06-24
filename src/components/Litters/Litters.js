import PhotoswipeR from "./Gallery/PhotoswipeR";
import PhotoswipeX from "./Gallery/PhotoswipeX";
import styled from "styled-components";

function Litters() {
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

  const Names = styled.h4`
    margin-bottom: 10px;
    font-weight: lighter;
    font-style: italic;
    font-size: 0.8rem;
    color: #cf5c36;
  `;

  return (
    <div style={{ padding: "80px 20%" }}>
      <Title>Nadchodzące mioty</Title>
      <p style={{ marginTop: "30px" }}>
        Obecnie nie planujemy kolejnego miotu.
        <br />
        <br />
        Zapraszamy do obserwowania strony oraz mediów społecznościowych w celu
        przyszłych informacji.
      </p>
      <Title style={{ margin: "30px 0" }}>Obecne mioty</Title>
      <h3>Miot R (2020)</h3>
      <Names>REA Rusty Curls x NORMAN Gently Born</Names>
      <p style={{ marginBottom: "30px" }}>
        16.08.2020 r. przyszedł na świat nasz pierwszy miot - dwa pieski - Roy
        oraz Rafael Leonardo (domowo Leo).
      </p>
      <PhotoswipeR />
      <h3>Miot X (2021)</h3>
      <Names>REA Rusty Curls x NORMAN Gently Born</Names>
      <p style={{ marginBottom: "30px" }}>
        Późnym wieczorem na dzień matki (taki oto Rea dostała prezent :D) -
        26.05.2021 r. urodził nam się chłopiec, a chwilę po północy - 27.05.2021
        r. przyszła na świat dziewczynka.
      </p>
      <PhotoswipeX />
    </div>
  );
}

export default Litters;
