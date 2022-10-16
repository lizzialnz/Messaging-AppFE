import './ButtonsLogout.css';
import { FaSignInAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const ButtonLogout = ({ title })=> {
    const Navigator = useNavigate();
    const navegar = () => {
         Navigator('/login');
    }
    return(
            <button className="buttonLogout" onClick={navegar}>
              <FaSignInAlt />
            </button>
    );
}

export default ButtonLogout;