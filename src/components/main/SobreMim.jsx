import styles from "./Main.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import me from "../../assets/img/me.png";
import { FaReact, FaJs, FaNodeJs } from "react-icons/fa";

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
const Habilidades = [
  {
    hab: "React",
    nv: "Básico",
    icon: <FaReact size={30} color="#61DAFB" />,
  },
  { hab: "JavaScript", nv: "Básico", icon: <FaJs size={30} color="#61DAFB" /> },
];

function SobreMim() {
  const idade = calcularIdade("2000-05-24");
  return (
    <div>
      <div className={styles.Container}>
        <h1>Sobre mim</h1>

        <div className={styles.meContainer}>
          <img src={me} alt="Eu e Théo s2" />
        </div>

        <h1>Gustavo Martins</h1>
        <p>
          Tenho {idade} anos e sou um apaixonado por tecnologia e automação.
          Minha jornada começou como Técnico Líder de Automação Predial no
          Hospital São Camilo, onde trabalho com CLPs Schneider e resolvo
          desafios complexos no dia a dia. À noite, aprofundo meus conhecimentos
          em Análise e Desenvolvimento de Sistemas na FATEC, focando em
          construir soluções inovadoras.
        </p>
        <p>
          <em>
            "O único modo de fazer um excelente trabalho é amar o que você faz."
          </em>
        </p>
        <p>
          <em>-Steve Jobs</em>
        </p>
      </div>
      <div className={styles.Container}>
        <h1>Habilidades</h1>
        <table className={styles.Table}>
          <tbody>
            {Habilidades.map((habilidade, index) =>
              habilidade.hab && habilidade.nv ? (
                <tr key={index}>
                  <td>{habilidade.icon}</td>
                  <td>{habilidade.hab}</td>
                  <td>{habilidade.nv}</td>
                </tr>
              ) : null
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SobreMim;
