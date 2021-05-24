import Menu from "./Menu/Menu";
import style from "./Header.module.css";
import { useEffect, useState } from "react";

function Header() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 80);
    });
  }, []);

  return (
    <header
      className={style.header}
      style={scroll ? { backgroundColor: "rgba(5, 5, 23, 0.5)" } : {}}
    >
      <Menu />
    </header>
  );
}

export default Header;
