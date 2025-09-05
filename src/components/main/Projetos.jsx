import styles from "./Main.module.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Projetos() {
  //variaveis
  const [nome, setNome] = useState(null);
  const [descrição, setDescrição] = useState("");
  const [projectLink, setprojectLink] = useState("");

  const projects = [
    {
      nome: "Pokedex",
      descrição: "Projeto de pokedex, treinamento de API",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      tecnologias: "react, banco de dados",
      link: "https://www.google.com.br",
    },
    {
      nome: "calculador de horas",
      tecnologias: "api maps, react",
      descrição:
        "Fiz esse pojeto para me ajudar a calculas as horas a serem lançadas na gasolina",
      img: "imagem calculador de horas",
      link: "https://www.google.com.br",
    },
    {
      nome: "teste",
    },
  ];

  return (
    <div className={styles.Container}>
      <div className={styles.Title}>
        <h1>Projetos</h1>
        <p>Abaixo disponibilizo meus projetos</p>
      </div>
      <div className={styles.Projects}>
        {projects.map((project, index) => (
          <div className={styles.ProjectCard} key={index}>
            {/* Nome do projeto, esse é obrigatório */}
            <h2>{project.nome}</h2>

            <div className={styles.img_desc}>
              {/* Imagem do projeto, se tiver */}
              {project.img ? (
                <img src={project.img} alt={project.nome} />
              ) : (
                <img src="#" alt="empty" />
              )}

              {/* Descrição do projeto, se tiver */}
              <div className={styles.descOverlay}>
                {project.descrição ? (
                  <p>{project.descrição}</p>
                ) : (
                  <p>sem descrição</p>
                )}
              </div>
            </div>

            {/* Tecnologias utilizadas, se tiver */}
            <p>
              Técnologias utilizadas:{" "}
              {project.tecnologias ? project.tecnologias : "NA"}
            </p>

            {/* Link do projeto, se tiver */}
            {project.link ? (
              <a href={project.link} target="_blank">
                Ver projeto
              </a>
            ) : (
              <a href="#" className={styles.emBreve}>
                Em breve
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projetos;
