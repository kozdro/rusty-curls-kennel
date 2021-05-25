import style from "./Footer.module.css";
import zkwp from "../../assets/images/logos/zkwp.png";
import fci from "../../assets/images/logos/fci.png";

function Footer() {
  return (
    <footer className={style.footer}>
      <span className={style.footer_span}>
        Rusty Curls &copy;
        <br />
        <div>
          Logo by:
          <a
            className={style.footer_a}
            style={{ paddingLeft: "5px" }}
            href="https://www.instagram.com/mallilau/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-instagram" style={{ paddingRight: "5px" }}></i>
            mallilau
          </a>
        </div>
        <span className={style.footer_span_copyright}>All rights reserved</span>
      </span>
      <div className={style.footer_social}>
        <span className={style.footer_social_span}>Obserwuj nas na:</span>
        <div>
          <a
            href="https://www.facebook.com/rustycurls"
            target="_blank"
            rel="noreferrer"
            className={style.footer_a}
          >
            <i
              className="fab fa-facebook-f"
              style={{ paddingRight: "5px" }}
            ></i>
            Facebook
          </a>
          <a
            href="https://www.instagram.com/rusty_curls_fci/"
            target="_blank"
            rel="noreferrer"
            className={style.footer_a}
          >
            <i className="fab fa-instagram" style={{ paddingRight: "5px" }}></i>
            Instagram
          </a>
        </div>
      </div>
      <div className={style.logos}>
        <img src={zkwp} alt="logo zkwp" className={style.logos_img} />
        <img src={fci} alt="logo fci" className={style.logos_img} />
      </div>
    </footer>
  );
}

export default Footer;
