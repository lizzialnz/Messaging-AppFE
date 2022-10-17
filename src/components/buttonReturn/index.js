import './ButtonsReturn.css';
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const ButtonReturn = ({ title })=> {
    const Navigator = useNavigate();
    const navegar = () => {
         Navigator('/login');
    }
    return(
            <button className="buttonreturn" onClick={navegar}>
              {<FaArrowAltCircleLeft />}
            </button>
    );
}

export default ButtonReturn;