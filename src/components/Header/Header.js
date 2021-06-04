import { useEffect, useState } from "react";
import Menu from "./Menu/Menu";
import styled from "styled-components";

function Header() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 80);
    });
  }, []);

  const Header = styled.header`
    height: 80px;
    width: 100%;
    position: fixed;
    z-index: 999;
    transition: background-color 0.3s;
  `;

  return (
    <Header style={scroll ? { backgroundColor: "rgba(5, 5, 23, 0.5)" } : {}}>
      <Menu />
    </Header>
  );
}

export default Header;
