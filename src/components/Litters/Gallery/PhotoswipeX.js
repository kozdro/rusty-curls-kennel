import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import img from "./imagesX";

function PhotoswipeX() {
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
            original={img.img16}
            thumbnail={img.img16_thumbnail}
            width="768"
            height="1024"
          >
            {({ ref, open }) => (
              <img
                style={{ ...smallItemStyles, gridArea: "1/1/2/2" }}
                alt="after birth"
                ref={ref}
                onClick={open}
                src={img.img16_thumbnail}
              />
            )}
          </Item>
          <Item
            original={img.img17}
            thumbnail={img.img17_thumbnail}
            width="768"
            height="1024"
          >
            {({ ref, open }) => (
              <img
                style={{ ...smallItemStyles, gridArea: "1/2/2/3" }}
                alt="puppies with rea"
                ref={ref}
                onClick={open}
                src={img.img17_thumbnail}
              />
            )}
          </Item>
          <Item
            original={img.img18}
            thumbnail={img.img18_thumbnail}
            width="768"
            height="1024"
          >
            {({ ref, open }) => (
              <img
                style={{ ...smallItemStyles, gridArea: "1/3/2/4" }}
                alt="puppy"
                ref={ref}
                onClick={open}
                src={img.img18_thumbnail}
              />
            )}
          </Item>
          <Item
            original={img.img13}
            thumbnail={img.img13_thumbnail}
            width="768"
            height="1024"
          >
            {({ ref, open }) => (
              <img
                style={{ ...smallItemStyles, gridArea: "2/1/3/2" }}
                alt="roy"
                ref={ref}
                onClick={open}
                src={img.img13_thumbnail}
              />
            )}
          </Item>
          <Item
            original={img.img11}
            thumbnail={img.img11_thumbnail}
            width="768"
            height="1024"
          >
            {({ ref, open }) => (
              <img
                style={{ ...smallItemStyles, gridArea: "2/2/3/3" }}
                alt="roy and leo"
                ref={ref}
                onClick={open}
                src={img.img11_thumbnail}
              />
            )}
          </Item>
          <Item
            original={img.img12}
            thumbnail={img.img12_thumbnail}
            width="768"
            height="1024"
          >
            {({ ref, open }) => (
              <img
                style={{ ...smallItemStyles, gridArea: "2/3/3/4" }}
                alt="leo"
                ref={ref}
                onClick={open}
                src={img.img12_thumbnail}
              />
            )}
          </Item>
          <Item
            original={img.img10}
            thumbnail={img.img10_thumbnail}
            width="768"
            height="1024"
          >
            {({ ref, open }) => (
              <img
                style={{ ...smallItemStyles, gridArea: "3/1/4/2" }}
                alt="leo in a tent"
                ref={ref}
                onClick={open}
                src={img.img10_thumbnail}
              />
            )}
          </Item>
          <Item
            original={img.img14}
            thumbnail={img.img14_thumbnail}
            width="768"
            height="1024"
          >
            {({ ref, open }) => (
              <img
                style={{ ...smallItemStyles, gridArea: "3/2/4/3" }}
                alt="roy"
                ref={ref}
                onClick={open}
                src={img.img14_thumbnail}
              />
            )}
          </Item>
          <Item
            original={img.img15}
            thumbnail={img.img15_thumbnail}
            width="768"
            height="1024"
          >
            {({ ref, open }) => (
              <img
                style={{ ...smallItemStyles, gridArea: "3/3/4/4" }}
                alt="leo on hands"
                ref={ref}
                onClick={open}
                src={img.img15_thumbnail}
              />
            )}
          </Item>
        </div>
      </Gallery>
    </div>
  );
}

export default PhotoswipeX;
