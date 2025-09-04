import styles from "./Main.module.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SobreMim() {
  //variaveis
  const [radio, setRadio] = useState(null);
  const [icone, setIcone] = useState(null);
  const navegate = useNavigate();

  return (
    <div className={styles.Container}>
      <h1>Sobre mim</h1>
      <p>Conteúdo da página Sobre mim</p>
    </div>
  );
}

export default SobreMim;
