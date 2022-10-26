import ProjectForm from '../components/form/ProjectForm';
import styles from './NewProject.module.css'

function NewProject() {
    return(
        <div className={styles.newproject_container}>
        <h1>Novo projeto</h1>
        <p>Crie seu projeto para depois adicionar seus serviços</p>
        <ProjectForm btnText="Criar projeto"/>
        </div>
       
    )
}
export default NewProject; 