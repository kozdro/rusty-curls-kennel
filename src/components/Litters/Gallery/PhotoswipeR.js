import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import img from "./imagesR";

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
            original={img.img7}
            thumbnail={img.img7_thumbnail}
            width="768"
            height="1024"
          >
            {({ ref, open }) => (
              <img
                style={{ ...smallItemStyles, gridArea: "1/1/2/2" }}
                alt="after birth"
                ref={ref}
                onClick={open}
                src={img.img7_thumbnail}
              />
            )}
          </Item>
          <Item
            original={img.img8}
            thumbnail={img.img8_thumbnail}
            width="768"
            height="1024"
          >
            {({ ref, open }) => (
              <img
                style={{ ...smallItemStyles, gridArea: "1/2/2/3" }}
                alt="puppies with rea"
                ref={ref}
                onClick={open}
                src={img.img8_thumbnail}
              />
            )}
          </Item>
          <Item
            original={img.img9}
            thumbnail={img.img9_thumbnail}
            width="768"
            height="1024"
          >
            {({ ref, open }) => (
              <img
                style={{ ...smallItemStyles, gridArea: "1/3/2/4" }}
                alt="puppy"
                ref={ref}
                onClick={open}
                src={img.img9_thumbnail}
              />
            )}
          </Item>
          <Item
            original={img.img4}
            thumbnail={img.img4_thumbnail}
            width="768"
            height="1024"
          >
            {({ ref, open }) => (
              <img
                style={{ ...smallItemStyles, gridArea: "2/1/3/2" }}
                alt="roy"
                ref={ref}
                onClick={open}
                src={img.img4_thumbnail}
              />
            )}
          </Item>
          <Item
            original={img.img2}
            thumbnail={img.img2_thumbnail}
            width="768"
            height="1024"
          >
            {({ ref, open }) => (
              <img
                style={{ ...smallItemStyles, gridArea: "2/2/3/3" }}
                alt="roy and leo"
                ref={ref}
                onClick={open}
                src={img.img2_thumbnail}
              />
            )}
          </Item>
          <Item
            original={img.img3}
            thumbnail={img.img3_thumbnail}
            width="768"
            height="1024"
          >
            {({ ref, open }) => (
              <img
                style={{ ...smallItemStyles, gridArea: "2/3/3/4" }}
                alt="leo"
                ref={ref}
                onClick={open}
                src={img.img3_thumbnail}
              />
            )}
          </Item>
          <Item
            original={img.img1}
            thumbnail={img.img1_thumbnail}
            width="768"
            height="1024"
          >
            {({ ref, open }) => (
              <img
                style={{ ...smallItemStyles, gridArea: "3/1/4/2" }}
                alt="leo in a tent"
                ref={ref}
                onClick={open}
                src={img.img1_thumbnail}
              />
            )}
          </Item>
          <Item
            original={img.img5}
            thumbnail={img.img5_thumbnail}
            width="768"
            height="1024"
          >
            {({ ref, open }) => (
              <img
                style={{ ...smallItemStyles, gridArea: "3/2/4/3" }}
                alt="roy"
                ref={ref}
                onClick={open}
                src={img.img5_thumbnail}
              />
            )}
          </Item>
          <Item
            original={img.img6}
            thumbnail={img.img6_thumbnail}
            width="768"
            height="1024"
          >
            {({ ref, open }) => (
              <img
                style={{ ...smallItemStyles, gridArea: "3/3/4/4" }}
                alt="leo on hands"
                ref={ref}
                onClick={open}
                src={img.img6_thumbnail}
              />
            )}
          </Item>
        </div>
      </Gallery>
    </div>
  );
}

export default PhotoswipeR;
