import styles from './Main.module.css'
import aboutMeIcon from '../../assets/img/about-me-icon.png'

function Main(){
    let TelaAtual = "home"
    return(
        <main className={styles.Main}>
            <div className={styles.TelaAtual}>
                <div>
                    <img src={aboutMeIcon} alt="icon-tela-atual" />
                    <h1>{TelaAtual}</h1>
                </div>
                <div>
                    <input type="checkbox" id='checkbox'/>
                    <label htmlFor="checkbox">x</label>
                </div>
            </div>
            <section>

            </section>
        </main>
    )
}

export default Main