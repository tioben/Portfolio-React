import styles from "./Main.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import me from "../../assets/img/me.png";

function calcularIdade(dataNascimento) {
  const hoje = new Date();
  const nascimento = new Date(dataNascimento);
  let idade = hoje.getFullYear() - nascimento.getFullYear();
  const m = hoje.getMonth() - nascimento.getMonth();
  if (m < 0 || (m === 0 && hoje.getDate() < nascimento.getDate())) {
    idade--;
  }
  return idade;
}
function SobreMim() {
  const idade = calcularIdade("2000-05-24");
  return (
    <div className={styles.Container}>
      <div className={styles.Title}>
        <h1>Sobre mim</h1>
      </div>

      <div className={styles.meContainer}>
        <img src={me} alt="Eu e Théo s2" />
      </div>

      <p>Me chamo Gustavo Martins, tenho {idade} anos</p>
    </div>
  );
}

export default SobreMim;
