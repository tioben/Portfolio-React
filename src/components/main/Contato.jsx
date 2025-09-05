import styles from "./Main.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contato() {
  //variaveis
  const navegate = useNavigate();

  return (
    <div className={styles.Container}>
      <div className={styles.Title}>
        <h1>Contato</h1>
        <p>Conteúdo da página Contato</p>
      </div>
    </div>
  );
}

export default Contato;
