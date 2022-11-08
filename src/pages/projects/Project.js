import Message from "../../components/layout/Message";
import styles from './Project.module.css'
import {useLocation} from 'react-router-dom'
import LinkButton from "../../components/layout/LinkButton";
import Container from "../../components/layout/Container";

import { useEffect, useState } from 'react';
import ProjectCard from "./ProjectCard";
import Loading from "../../components/layout/Loading";

function Project() {

    const location = useLocation();
    let message = '';
    const [loading, setLoading] = useState(false);
    const [messageRemove, setMessageRemove] = useState('');

    const [projects, setProjects] = useState([]);
    if(location.state) {
        message = location.state.message; 
    }
    function removeProject (id) {
        fetch(`http://localhost:5000/project/${id}`, {
            method : 'DELETE',
            headers: {
                'Content-type': 'Application/json'
            },
        }).then((resp) => resp.json()).then((data) => {
            setProjects(projects.filter((project)=>project.id !==id))
            setMessageRemove('O projeto foi excluido com sucesso!')
        }).catch((erro) => console.log(erro))
    }

    
    useEffect (() => {

        setTimeout(()=> {
        
            fetch("http://localhost:5000/project",{
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((resp) => resp.json())
            .then((data) => setProjects(data))
            .catch((erro) => console.log(erro))
            setLoading(true);

        },500)
       

    },[])
    


    return(
        <div className={styles.project_container}>
            <div className={styles.project_titulo}>
                <h1>Projetos</h1>
                <LinkButton page='/newproject' text_button='Criar projeto'/>
            </div>
            
                {message && (
                    <Message msg = {message} type="success"/>
                ) }
                {messageRemove && (
                    <Message msg = {messageRemove} type="success"/>
                ) }
            <Container customClass="start">
                {
                    projects.length>0 && 
                    projects.map((project) => 

                    (<ProjectCard 
                        name={project.name} 
                        id= {project.id}
                        budget = {project.butget}
                        category = {project?.category?.name}
                        key={project.id}
                        handleRemove={removeProject}
                    />) 
                    )
                }
                {!loading && (
                    <Loading />
                )}
                {
                    loading && projects.length === 0 && (
                        <p>Não existe registro de projetos!</p>   
                    )
                }
            </Container>
            
        </div>
    )
}
export default Project; 