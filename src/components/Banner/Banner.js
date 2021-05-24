import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Banner.css";

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
          <strong style={{ color: "#cf5c36", fontSize: "1.5em" }}>
            Rusty Curls
          </strong>
        </h1>
        <Slide>
          {slideImages.map((img) => {
            return (
              <div className="each-slide" key={img}>
                <div style={{ backgroundImage: `url(${img})` }}>
                  <span>Roy Rusty Curls</span>
                </div>
              </div>
            );
          })}
        </Slide>
      </div>
    </>
  );
}

export default Logo;
