import style from "./Litters.module.css";

function Litters() {
  return (
    <div className={style.litters}>
      <h2 className={style.litters_title}>Nadchodzące mioty</h2>
      <h2 className={style.litters_title}>Obecne mioty</h2>
    </div>
  );
}

export default Litters;
