import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'; 

function Footer () {
    return (
        <footer className={styles.rodape}>
            <div>
                <FaFacebook/>
                <FaInstagram />
                <FaLinkedin />
            </div>
            <p><strong>Costs</strong> &copy; 2022</p>

        </footer>
    )
}
export default Footer; 