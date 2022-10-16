import './ButtonsReturn.css';
import { FaHome } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const ButtonReturn = ({ title })=> {
    const Navigator = useNavigate();
    const navegar = () => {
         Navigator('/login');
    }
    return(
            <button className="buttonreturn" onClick={navegar}>
              {<FaHome />}
            </button>
    );
}

export default ButtonReturn;