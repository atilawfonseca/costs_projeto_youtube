import {BsPencil, BsFillTrashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import styles from './ProjectCard.module.css';

function ProjectCard ({id, name, budget, category, handleRemove }) {
   
    const remove = (e) => {
        e.preventDefault();
        handleRemove(id);
    }

    return (
        <div className={styles.card} key={id}>
            <h4 key={id}>{name}</h4>
            <p><span>Orçamento:</span> {budget}</p>
            <p className={`${styles.card_category_text} `}><span className={styles[category]}></span> {category}</p>
            
            <div className={styles.project_card_actions}>
                <Link to="/">
                    <BsPencil /> Editar
                </Link>
                <button onClick={remove}>
                    <BsFillTrashFill /> Excluir
                </button>
            </div>
            
        </div>
    )
}
export default ProjectCard;