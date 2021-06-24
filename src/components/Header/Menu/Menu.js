import { Link } from "react-router-dom";
import style from "./Menu.module.css";
import logo from "../../../assets/images/logos/logo transparent.png";

function Menu() {
  return (
    <nav className={style.menuContainer}>
      <Link to="/hodowla" className={style.link}>
        Hodowla
      </Link>
      <Link to="/mioty" className={style.link}>
        Mioty
      </Link>
      <Link to="/wystawy" className={style.link}>
        Wystawy
      </Link>
      <Link to="/">
        <img className={style.menuItemImg} src={logo} alt="logo hodowli" />
      </Link>
      <Link to="/galeria" className={style.link}>
        Galeria
      </Link>
      <Link to="/zkwp-fci" className={style.link}>
        ZKwP/FCI
      </Link>
      <Link to="/kontakt" className={style.link}>
        Kontakt
      </Link>
    </nav>
  );
}

export default Menu;
