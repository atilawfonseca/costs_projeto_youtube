import LinkButton from '../components/layout/LinkButton';
import costs from '../img/savings.svg';
import styles from "./Home.module.css";


function Home() {
    return(
        <div className={styles.container}>
            <h1>Bem vindo ao <strong>Costs</strong></h1>
            <p>Comece a gerenciar seus projetos agora mesmo!</p>
            <LinkButton page='/newproject' text_button='Criar projeto'/>
            <img src={costs} alt="Logo da pagina" />
        </div>
        
    )
}
export default Home; 