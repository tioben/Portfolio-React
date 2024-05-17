import styles from './Left_Bar.module.css'
import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { FaRegUser } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { VscGithubProject } from "react-icons/vsc";

function LeftBar(){
    //variaveis
    const [radio, setRadio] = useState(null)
    const [icone, setIcone ] = useState(null)
    const navegate = useNavigate()

    //funções
    function zerandoRadio(){
        setRadio(null)
        navegate("/")
    }

    function itemName(){
        return 
        <>
            {icone}
            <p>{radio}</p>
        </>
    }

    function handleChange(texto, navegacao, icon){
        setRadio(texto);
        setIcone(icon);
        navegate(navegacao);
    }
    console.log(icone)
    console.log(radio)

    //retorno
    return(
        <nav className={styles.Nav}>
            <ul type='none'>
                <li>
                    <input type="radio" name="radio" id="radio1" onChange={() => handleChange("Sobre mim", "/item1", <FaRegUser />)} />
                    <label htmlFor="radio1" ><FaRegUser /></label>
                </li>
                <li>
                    <input type="radio" name="radio" id="radio2" onChange={() => handleChange("Projetos", "/item2", <VscGithubProject />)} />
                    <label htmlFor="radio2" ><VscGithubProject /></label>
                </li>
                <li>
                    <input type="radio" name="radio" id="radio3" onChange={() => handleChange("Contato", "/item3", <IoIosContact />)} />
                    <label htmlFor="radio3" ><IoIosContact /></label>
                </li>
            </ul>
            {radio && (
                <div className={styles.Container_Quadradinho}>
                    {icone}
                    <p>{radio}</p>
                    <button onClick={zerandoRadio}>X</button>
                </div>
                )    
            }
            
        </nav>
    )
}

export default LeftBar