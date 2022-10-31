import {useNavigate} from 'react-router-dom';
import ProjectForm from '../components/form/ProjectForm';
import styles from './NewProject.module.css'

function NewProject() {
    
    const history = useNavigate();
    function creatPost (project) {

        //initialize cost and services. 
        project.cost = 0; 
        project.services = [];

        fetch("http://localhost:5000/project", {
            method :"POST",
            headers : {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then(
            (resp) => resp.json()
        ).then((data) => {
            //redireciona
            history('/project', {state:{message: 'Projeto criado com sucesso!'}})
        }
            
        )
        .catch((erro) => console.logo(erro))
    }
    
    return(

        <div className={styles.newproject_container}>
        <h1>Novo projeto</h1>
        <p>Crie seu projeto para depois adicionar seus serviços</p>
        <ProjectForm handleSubmit= {creatPost} btnText="Criar projeto"/>
        </div>
       
    )
}
export default NewProject; 