import {Link} from 'react-router-dom';
import styles from './Navbars.module.css';
import costs from "../../img/costs_logo.png"

function Navbars () {
    return (
        <nav className={styles.container}>
             <Link to="/"> <img src={costs} alt="logo costs"/> </Link>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/company">Empresa</Link>
                <Link to="/project">Projeto</Link>
                <Link to="/contact">Contato</Link>
            </ul>
        </nav>
    )
}
export default Navbars; 