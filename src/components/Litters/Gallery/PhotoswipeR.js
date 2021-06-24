import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import img1 from "../../../assets/images/gallery-litters/litter R/IMG_8249.JPEG";
import img2 from "../../../assets/images/gallery-litters/litter R/IMG_8260.JPG";
import img3 from "../../../assets/images/gallery-litters/litter R/IMG_8455.JPEG";
import img4 from "../../../assets/images/gallery-litters/litter R/IMG_8457.JPEG";
import img5 from "../../../assets/images/gallery-litters/litter R/IMG_8683.JPG";
import img6 from "../../../assets/images/gallery-litters/litter R/IMG_9155.JPG";
import img7 from "../../../assets/images/gallery-litters/litter R/IMG_7803.JPEG";
import img8 from "../../../assets/images/gallery-litters/litter R/IMG_7833.JPEG";
import img9 from "../../../assets/images/gallery-litters/litter R/IMG_7983.JPEG";
import img1_thumbnail from "../../../assets/images/gallery-litters/litter R/IMG_8249-thumbnail.jpg";
import img2_thumbnail from "../../../assets/images/gallery-litters/litter R/IMG_8260-thumbnail.jpg";
import img3_thumbnail from "../../../assets/images/gallery-litters/litter R/IMG_8455-thumbnail.jpg";
import img4_thumbnail from "../../../assets/images/gallery-litters/litter R/IMG_8457-thumbnail.jpg";
import img5_thumbnail from "../../../assets/images/gallery-litters/litter R/IMG_8683-thumbnail.jpg";
import img6_thumbnail from "../../../assets/images/gallery-litters/litter R/IMG_9155-thumbnail.jpg";
import img7_thumbnail from "../../../assets/images/gallery-litters/litter R/IMG_7803-thumbnail.jpg";
import img8_thumbnail from "../../../assets/images/gallery-litters/litter R/IMG_7833-thumbnail.jpg";
import img9_thumbnail from "../../../assets/images/gallery-litters/litter R/IMG_7983-thumbnail.jpg";

function PhotoswipeR() {
  const smallItemStyles = {
    cursor: "pointer",
    objectFit: "cover",
    width: "100%",
    maxHeight: "100%",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "30px",
      }}
    >
      <Gallery>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "repeat(3, 1fr)",
            gap: "10px 10px",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          <Item
            original={img7}
            thumbnail={img7_thumbnail}
            width="768"
            height="1024"
          >
            {({ ref, open }) => (
              <img
                style={{ ...smallItemStyles, gridArea: "1/1/2/2" }}
                alt="after birth"
                ref={ref}
                onClick={open}
                src={img7_thumbnail}
              />
            )}
          </Item>
          <Item
            original={img8}
            thumbnail={img8_thumbnail}
            width="768"
            height="1024"
          >
            {({ ref, open }) => (
              <img
                style={{ ...smallItemStyles, gridArea: "1/2/2/3" }}
                alt="puppies with rea"
                ref={ref}
                onClick={open}
                src={img8_thumbnail}
              />
            )}
          </Item>
          <Item
            original={img9}
            thumbnail={img9_thumbnail}
            width="768"
            height="1024"
          >
            {({ ref, open }) => (
              <img
                style={{ ...smallItemStyles, gridArea: "1/3/2/4" }}
                alt="puppy"
                ref={ref}
                onClick={open}
                src={img9_thumbnail}
              />
            )}
          </Item>
          <Item
            original={img4}
            thumbnail={img4_thumbnail}
            width="768"
            height="1024"
          >
            {({ ref, open }) => (
              <img
                style={{ ...smallItemStyles, gridArea: "2/1/3/2" }}
                alt="roy"
                ref={ref}
                onClick={open}
                src={img4_thumbnail}
              />
            )}
          </Item>
          <Item
            original={img2}
            thumbnail={img2_thumbnail}
            width="768"
            height="1024"
          >
            {({ ref, open }) => (
              <img
                style={{ ...smallItemStyles, gridArea: "2/2/3/3" }}
                alt="roy and leo"
                ref={ref}
                onClick={open}
                src={img2_thumbnail}
              />
            )}
          </Item>
          <Item
            original={img3}
            thumbnail={img3_thumbnail}
            width="768"
            height="1024"
          >
            {({ ref, open }) => (
              <img
                style={{ ...smallItemStyles, gridArea: "2/3/3/4" }}
                alt="leo"
                ref={ref}
                onClick={open}
                src={img3_thumbnail}
              />
            )}
          </Item>
          <Item
            original={img1}
            thumbnail={img1_thumbnail}
            width="768"
            height="1024"
          >
            {({ ref, open }) => (
              <img
                style={{ ...smallItemStyles, gridArea: "3/1/4/2" }}
                alt="leo in a tent"
                ref={ref}
                onClick={open}
                src={img1_thumbnail}
              />
            )}
          </Item>
          <Item
            original={img5}
            thumbnail={img5_thumbnail}
            width="768"
            height="1024"
          >
            {({ ref, open }) => (
              <img
                style={{ ...smallItemStyles, gridArea: "3/2/4/3" }}
                alt="roy"
                ref={ref}
                onClick={open}
                src={img5_thumbnail}
              />
            )}
          </Item>
          <Item
            original={img6}
            thumbnail={img6_thumbnail}
            width="768"
            height="1024"
          >
            {({ ref, open }) => (
              <img
                style={{ ...smallItemStyles, gridArea: "3/3/4/4" }}
                alt="leo on hands"
                ref={ref}
                onClick={open}
                src={img6_thumbnail}
              />
            )}
          </Item>
        </div>
      </Gallery>
    </div>
  );
}

export default PhotoswipeR;
