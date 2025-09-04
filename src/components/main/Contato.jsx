import styles from "./Main.module.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Contato() {
  //variaveis
  const [radio, setRadio] = useState(null);
  const [icone, setIcone] = useState(null);
  const navegate = useNavigate();

  return (
    <div className={styles.Container}>
      <h1>Contato</h1>
      <p>Conteúdo da página Contato</p>
    </div>
  );
}

export default Contato;
