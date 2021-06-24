import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import img from "./images";

function CarouselFn() {
  const images = [
    { src: img.img },
    { src: img.img2 },
    { src: img.img3 },
    { src: img.img4 },
    { src: img.img5 },
    { src: img.img6 },
    { src: img.img7 },
    { src: img.img8 },
    { src: img.img9 },
    { src: img.img10 },
    { src: img.img11 },
    { src: img.img12 },
    { src: img.img13 },
    { src: img.img14 },
    { src: img.img15 },
    { src: img.img16 },
    { src: img.img17 },
    { src: img.img18 },
    { src: img.img19 },
    { src: img.img20 },
    { src: img.img21 },
    { src: img.img22 },
    { src: img.img23 },
    { src: img.img24 },
    { src: img.img25 },
    { src: img.img26 },
    { src: img.img27 },
  ];

  return <Carousel images={images} />;
}

export default CarouselFn;
