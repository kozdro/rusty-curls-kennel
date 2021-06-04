import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Banner.css";
import roy1 from "../../assets/images/slider/IMG_0852.JPG";
import roy2 from "../../assets/images/slider/IMG_0853.JPG";
import roy3 from "../../assets/images/slider/IMG_0863.JPG";
import rea1 from "../../assets/images/slider/IMG_2751.JPG";
import rea2 from "../../assets/images/slider/IMG_4010.JPG";
import rea3 from "../../assets/images/slider/IMG_5957.jpeg";
import rea4 from "../../assets/images/slider/IMG_6051.jpeg";

function Logo() {
  const slideImages = [rea1, rea2, roy1, roy2, rea3, rea4, roy3];

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
          {slideImages.map((img) => (
            <div className="each-slide" key={img}>
              <div style={{ backgroundImage: `url(${img})` }}>
                <span>Roy Rusty Curls</span>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </>
  );
}

export default Logo;
