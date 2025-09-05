import styles from "./Main.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SobreMim() {
  //variaveis

  return (
    <div className={styles.Container}>
      <h1>Sobre mim</h1>
      <p>Conteúdo da página Sobre mim</p>
    </div>
  );
}

export default SobreMim;
