import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import img1 from "../../../assets/images/gallery/IMG_3337.jpg";
import img2 from "../../../assets/images/gallery/IMG_9593.jpg";
import img3 from "../../../assets/images/gallery/IMG_3104.JPG";
import img4 from "../../../assets/images/gallery/IMG_2750.JPG";
import img5 from "../../../assets/images/gallery/IMG_8503.JPG";
import img1_thumbnail from "../../../assets/images/gallery/IMG_3337-thumbnail.jpg";
import img2_thumbnail from "../../../assets/images/gallery/IMG_9593-thumbnail.jpg";
import img3_thumbnail from "../../../assets/images/gallery/IMG_3104-thumbnail.jpg";
import img4_thumbnail from "../../../assets/images/gallery/IMG_2750-thumbnail.jpg";
import img5_thumbnail from "../../../assets/images/gallery/IMG_8503-thumbnail.jpg";

function Photoswipe() {
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
      }}
    >
      <Gallery>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "repeat(2, 240px)",
            gap: "10px 10px",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          <Item
            original={img1}
            thumbnail={img1_thumbnail}
            width="768"
            height="1024"
          >
            {({ ref, open }) => (
              <img
                style={{ ...smallItemStyles, gridArea: "1/1/3/2" }}
                alt="on the show"
                ref={ref}
                onClick={open}
                src={img1_thumbnail}
              />
            )}
          </Item>
          <Item
            original={img2}
            thumbnail={img2_thumbnail}
            width="958"
            height="1024"
          >
            {({ ref, open }) => (
              <img
                style={{ ...smallItemStyles, gridArea: "1/2/2/3" }}
                alt="on the show"
                ref={ref}
                onClick={open}
                src={img2_thumbnail}
              />
            )}
          </Item>
          <Item
            original={img4}
            thumbnail={img4_thumbnail}
            width="1024"
            height="686"
          >
            {({ ref, open }) => (
              <img
                style={{ ...smallItemStyles, gridArea: "2/2/3/3" }}
                alt="on the show"
                ref={ref}
                onClick={open}
                src={img4_thumbnail}
              />
            )}
          </Item>
          <Item
            original={img5}
            thumbnail={img5_thumbnail}
            width="1024"
            height="683"
          >
            {({ ref, open }) => (
              <img
                style={{ ...smallItemStyles, gridArea: "1/3/2/4" }}
                alt="on the show"
                ref={ref}
                onClick={open}
                src={img5_thumbnail}
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
                alt="on the show"
                ref={ref}
                onClick={open}
                src={img3_thumbnail}
              />
            )}
          </Item>
        </div>
      </Gallery>
    </div>
  );
}

export default Photoswipe;
