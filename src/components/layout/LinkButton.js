import style from './LinkButton.module.css'
import {Link} from 'react-router-dom'

function LinkButton ({page, text_button}) {
    return <Link className={style.btn} to={page}>{text_button}</Link>
}
export default LinkButton;