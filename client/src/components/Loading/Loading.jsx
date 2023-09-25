import React from "react";
import style from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={style.loading}>
      <div className={style.spinner}></div>
      <p>. . . . CARGANDO. . . . </p>
    </div>
  );
};

export default Loading;
