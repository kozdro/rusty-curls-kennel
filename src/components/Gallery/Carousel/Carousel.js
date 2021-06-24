import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import img from "../../../assets/images/gallery2/IMG_9827.JPEG";
import img2 from "../../../assets/images/gallery2/IMG_0414.JPEG";
import img3 from "../../../assets/images/gallery2/IMG_0428.JPEG";
import img4 from "../../../assets/images/gallery2/IMG_0743.JPG";
import img5 from "../../../assets/images/gallery2/IMG_0821.JPEG";
import img6 from "../../../assets/images/gallery2/IMG_1121.JPG";
import img7 from "../../../assets/images/gallery2/IMG_1267.JPEG";
import img8 from "../../../assets/images/gallery2/IMG_2292.jpg.jpg";
import img9 from "../../../assets/images/gallery2/IMG_2681.JPEG";
import img10 from "../../../assets/images/gallery2/IMG_4236.JPEG";
import img11 from "../../../assets/images/gallery2/IMG_4404.JPEG";
import img12 from "../../../assets/images/gallery2/IMG_4892.JPEG";
import img13 from "../../../assets/images/gallery2/IMG_5737.JPEG";
import img14 from "../../../assets/images/gallery2/IMG_6187.JPEG";
import img15 from "../../../assets/images/gallery2/IMG_6552.JPEG";
import img16 from "../../../assets/images/gallery2/IMG_6918.JPEG";
import img17 from "../../../assets/images/gallery2/IMG_7041.JPEG";
import img18 from "../../../assets/images/gallery2/IMG_7133.JPEG";
import img19 from "../../../assets/images/gallery2/IMG_8254.JPEG";
import img20 from "../../../assets/images/gallery2/IMG_8503.JPG";
import img21 from "../../../assets/images/gallery2/IMG_8538.JPEG";
import img22 from "../../../assets/images/gallery2/IMG_9091.JPEG";
import img23 from "../../../assets/images/gallery2/IMG_9201.JPEG";
import img24 from "../../../assets/images/gallery2/IMG_9248.JPEG";
import img25 from "../../../assets/images/gallery2/IMG_9262.JPG";
import img26 from "../../../assets/images/gallery2/IMG_9615.JPEG";
import img27 from "../../../assets/images/gallery2/IMG_0088.JPEG";

function CarouselFn() {
  const images = [
    { src: img },
    { src: img2 },
    { src: img3 },
    { src: img4 },
    { src: img5 },
    { src: img6 },
    { src: img7 },
    { src: img8 },
    { src: img9 },
    { src: img10 },
    { src: img11 },
    { src: img12 },
    { src: img13 },
    { src: img14 },
    { src: img15 },
    { src: img16 },
    { src: img17 },
    { src: img18 },
    { src: img19 },
    { src: img20 },
    { src: img21 },
    { src: img22 },
    { src: img23 },
    { src: img24 },
    { src: img25 },
    { src: img26 },
    { src: img27 },
  ];

  return <Carousel images={images} />;
}

export default CarouselFn;
