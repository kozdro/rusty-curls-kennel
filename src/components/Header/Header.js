import Menu from "./Menu/Menu";
import style from "./Header.module.css";

function Header() {
  return (
    <header className={style.header}>
      <Menu />
    </header>
  );
}

export default Header;
