import Message from "../components/layout/Message";
import styles from './Project.module.css'
import {useLocation} from 'react-router-dom'

function Project() {

    const location = useLocation();
    let message = '';

    if(location.state) {
        message = location.state.message; 
        
    }

    return(
        <div className={styles.project_container}>
        <h1>Projetos</h1>
        {message && (
            <Message msg = {message} type="success"/>
        ) }
        </div>
    )
}
export default Project; 