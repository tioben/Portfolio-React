import styles from "./Main.module.css";
import me from "../../assets/img/me.png";
import {
  FaHtml5,
  FaCss3,
  FaPython,
  FaBatteryEmpty,
  FaReact,
  FaJs,
} from "react-icons/fa";

import { BiLogoPostgresql } from "react-icons/bi";

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
const Programações = [
  { hab: "HTML5", nv: "Básico", icon: <FaHtml5 size={30} /> },
  { hab: "CSS3", nv: "Básico", icon: <FaCss3 size={30} /> },
  { hab: "JavaScript", nv: "Básico", icon: <FaJs size={30} /> },
  { hab: "React", nv: "Básico", icon: <FaReact size={30} /> },
  { hab: "Python", nv: "Básico", icon: <FaPython size={30} /> },
  { hab: "PostGreSQL", nv: "Básico", icon: <BiLogoPostgresql size={30} /> },
];

const Automações = [
  { hab: "SCADA", nv: "Avançado" },
  { hab: "Software de Controle", nv: "Avançado" },
  { hab: "Comandos Elétricos", nv: "Avançado" },
  { hab: "MODBUS", nv: "Avançado" },
  { hab: "BACNET", nv: "Avançado" },
  { hab: "HVAC", nv: "Avançado" },
  { hab: "Hidráulica", nv: "Avançado" },
  { hab: "Elétrica", nv: "Avançado" },
  { hab: "Diesel", nv: "Avançado" },
];

const Interesses = [
  { item: "Leitura" },
  { item: "Jogos" },
  { item: "Filmes" },
  { item: "Séries" },
  { item: "Animes" },
];

function SobreMim() {
  const idade = calcularIdade("2000-05-24");
  return (
    <div>
      {/* Sobre mim */}
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
      {/* Habilidades */}
      <div className={styles.Container}>
        <h1>Habilidades</h1>
        <table className={styles.Table}>
          <thead>
            <caption>Programação</caption>
          </thead>
          <tbody className={styles.Programacao}>
            {Programações.map((Programação, index) =>
              Programação.hab && Programação.nv ? (
                <tr key={index}>
                  <td>{Programação.icon}</td>
                  <td>{Programação.hab}</td>
                  <td>{Programação.nv}</td>
                </tr>
              ) : null
            )}
          </tbody>
        </table>

        <table className={styles.Table} id="Automacao">
          <thead>
            <caption>Automação</caption>
          </thead>
          <tbody className={styles.Automacao}>
            {Automações.map((Automação, index) =>
              Automação.hab && Automação.nv ? (
                <tr key={index}>
                  <td>{Automação.hab}</td>
                  <td>{Automação.nv}</td>
                </tr>
              ) : null
            )}
          </tbody>
        </table>
      </div>
      {/* Interesses */}
      <div className={styles.Container}>
        <h1>Interesses</h1>
        <table className={styles.Table}>
          <tbody className={styles.Interesses}>
            {Interesses.map((Interesse, index) =>
              Interesse.item ? (
                <tr key={index}>
                  <td>{Interesse.item}</td>
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
