import {useEffect, useState} from 'react'

import Input from './Input';
import styles from './ProjectForm.module.css';
import Select from './Select';
import SubmitButton from './SubmitButton';

function ProjectForm ({btnText}) {

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
    }).then((resp) => resp.json()).then((data)=> {setcategoria(data)}).catch(erro => console.log(erro))
   },[])

    return (
        <form className={styles.projectform_container}>
            <Input type="texto" 
            text="Nome do projeto"
            name="name"
            placeholder="Insira o nome do projeto"
             />
            
            <Input type="number" 
            text="Orçamento do projeto"
            name="butget"
            placeholder="Insira o orçamento total"
             />
           
            <Select name="category_id" text="Selecione a categoria" options={categoria}/>
            <SubmitButton text={btnText}/>
        </form>
    )
}
export default ProjectForm; 