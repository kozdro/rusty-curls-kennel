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

function Banner() {
  const slideImages = [
    { img: rea1, dog: "REA" },
    { img: rea2, dog: "REA" },
    { img: roy1, dog: "ROY" },
    { img: roy2, dog: "ROY" },
    { img: rea3, dog: "REA" },
    { img: rea4, dog: "REA" },
    { img: roy3, dog: "ROY" },
  ];

  return (
    <div className="slide-container">
      <h1>
        Hodowla płowych pudli toy
        <br />
        <strong style={{ color: "#cf5c36", fontSize: "1.5em" }}>
          Rusty Curls
        </strong>
      </h1>
      <Slide>
        {slideImages.map(({ img, dog }) => (
          <div className="each-slide" key={img}>
            <div style={{ backgroundImage: `url(${img})` }}>
              <span>{dog} Rusty Curls</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default Banner;
