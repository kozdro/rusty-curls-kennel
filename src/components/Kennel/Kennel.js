import style from "./Kennel.module.css";
import puppies from "../../assets/images/litters/IMG_8260.JPG";
import Photoswipe from "./Gallery/Photoswipe";

function Kennel() {
  return (
    <>
      <section className={style.about}>
        <h2 className={style.about_title}>O nas</h2>
        <p className={style.about_subtitle}>
          Nasza hodowla powstała w 2020 roku, gdy zdecydowaliśmy się na pierwszy
          miot. Jesteśmy zarejestrowani w Związku Kynologicznym w Polsce (ZKwP),
          który przynależy do FCI. Rusty Curls to mała, domowa hodowla, która
          znajduje się we Wrocławiu, w której obecnie mamy jedną suczkę
          hodowlaną - Rea Wisdom and Beauty.
        </p>
      </section>
      <Photoswipe />
      <section className={style.litters}>
        <h2 className={style.litters_title}>Nasze mioty</h2>
        <div className={style.litters_container}>
          <div className={style.litters_content_container}>
            <p className={style.litters_subtitle}>
              Zapraszamy do zapoznania się
              <br />z naszymi miotami.
            </p>
            <button className={style.litters_subtitle_btn}>
              obecne oraz planowane mioty
            </button>
          </div>
          <div className={style.litters_img_container}>
            <img src={puppies} alt="puppies" className={style.litters_img} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Kennel;
