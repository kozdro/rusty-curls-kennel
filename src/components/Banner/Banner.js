import "react-slideshow-image/dist/styles.css";
import "./Banner.css";
import { Slide } from "react-slideshow-image";

const slideImages = [
  "https://i.ibb.co/dgC5rbv/IMG-0852.jpg",
  "https://i.ibb.co/b7ymBPp/IMG-0853.jpg",
  "https://i.ibb.co/NtHqwcp/IMG-0863.jpg",
];

function Logo() {
  return (
    <>
      <div className="slide-container">
        <h1>
          Hodowla płowych pudli toy
          <br />
          <span>Rusty Curls</span>
        </h1>
        <Slide>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
              <span>Roy Rusty Curls</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
              <span>Roy Rusty Curls</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
              <span>Roy Rusty Curls</span>
            </div>
          </div>
        </Slide>
      </div>
    </>
  );
}

export default Logo;
