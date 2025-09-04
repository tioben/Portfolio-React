import styles from "./Left_Bar.module.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { VscGithubProject } from "react-icons/vsc";
import { FaPhone } from "react-icons/fa";

function LeftBar() {
  //variaveis
  const [radio, setRadio] = useState(null);
  const [icone, setIcone] = useState(null);
  const navegate = useNavigate();

  //funções
  function zerandoRadio() {
    setRadio(null);
    navegate("/");
  }

  function handleChange(texto, navegacao, icon) {
    setRadio(texto);
    setIcone(icon);
    navegate(navegacao);
  }

  return (
    <nav className={styles.Nav}>
      <ul type="none">
        <li>
          <input
            type="radio"
            name="radio"
            id="radio1"
            onChange={() =>
              handleChange("Sobre mim", "/SobreMim", <FaRegUser />)
            }
          />
          <label htmlFor="radio1">
            <FaRegUser />
          </label>
        </li>
        <li>
          <input
            type="radio"
            name="radio"
            id="radio2"
            onChange={() =>
              handleChange("Projetos", "/Projetos", <VscGithubProject />)
            }
          />
          <label htmlFor="radio2">
            <VscGithubProject />
          </label>
        </li>
        <li>
          <input
            type="radio"
            name="radio"
            id="radio3"
            onChange={() => handleChange("Contato", "/Contato", <FaPhone />)}
          />
          <label htmlFor="radio3">
            <FaPhone />
          </label>
        </li>
      </ul>
      {radio && (
        <div className={styles.Container_Quadradinho}>
          {icone}
          <p>{radio}</p>
          <button onClick={zerandoRadio}>X</button>
        </div>
      )}
    </nav>
  );
}

export default LeftBar;
