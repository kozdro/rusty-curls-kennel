import style from "./Kennel.module.css";

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
      <section className={style.litters}>
        <h2 className={style.about_title}>Nasze mioty</h2>
        <p className={style.about_subtitle}>Zapraszamy do zapoznania się z naszymi miotami.</p>
      </section>
    </>
  );
}

export default Kennel;
