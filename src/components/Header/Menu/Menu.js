import style from "./Menu.module.css";
import logo from "../../../assets/images/logo.png";

function Menu() {
  return (
    <nav className={style.menuContainer}>
      <ul className={style.menu}>
        <li className={style.menuItem}>Hodowla</li>
        <li className={style.menuItem}>Mioty</li>
        <li className={style.menuItem}>Wystawy</li>
        <li className={style.menuItem}>
          <img className={style.menuItemImg} src={logo} alt="logo hodowli" />
        </li>
        <li className={style.menuItem}>Galeria</li>
        <li className={style.menuItem}>ZKwP/FCI</li>
        <li className={style.menuItem}>Kontakt</li>
      </ul>
    </nav>
  );
}

export default Menu;
