import { useEffect, useState } from 'react';

import Input from './Input';
import styles from './ProjectForm.module.css';
import Select from './Select';
import SubmitButton from './SubmitButton';

function ProjectForm({ handleSubmit, btnText, projectData }) {

    const [project, setproject] = useState(projectData || {});

    const [categoria, setcategoria] = useState([]);
    //para fazer apenas uma requisição, não loops infinitos como é usado apenas com o fetch
    useEffect(() => {
        //fazer um request pra API varias vezes
        fetch('http://localhost:5000/categories', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
            //o then pega a resposta e transforma em json, se pega o arquivo em json e transforma em data que é 
            //guardado em setcategoria. 
        }).then((resp) => resp.json()).then((data) => { setcategoria(data) }).catch(erro => console.log(erro))
    }, [])

    //agora já dá pra criar o projecto submit, pq já está recebendo evento
    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange(e) {
        setproject({ ...project, [e.target.name]: e.target.value })
        
    }

    function handleCategory(e) {
        setproject({
            ...project, category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            }
        })
        
    }


    return (
        <form onSubmit={submit} className={styles.projectform_container}>
            <Input type="texto"
                text="Nome do projeto"
                name="name"
                placeholder="Insira o nome do projeto"
                handleOnChange={handleChange}
                value = {project.name ? project.name : ''}
            />

            <Input type="number"
                text="Orçamento do projeto"
                name="butget"
                placeholder="Insira o orçamento total"
                handleOnChange={handleChange}
                value= {project.butget ? project.butget : ''}
            />

            <Select name="category_id" 
            text="Selecione a categoria" 
            options={categoria} 
            handleOnChange={handleCategory} />
            <SubmitButton text={btnText}
            value = {project.category ? project.category.id : ''} />
        </form>
    )
}
export default ProjectForm; 