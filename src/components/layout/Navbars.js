import {Link} from 'react-router-dom';

function Navbars () {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/company">Empresa</Link>
            <Link to="/project">Projeto</Link>
            <Link to="/contact">Contato</Link>
        </div>
    )
}
export default Navbars; 