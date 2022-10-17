import './ButtonNew.css';
import { FaRegCommentDots } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const ButtonNew = ({ title }) => {
  const Navigator = useNavigate();
  const navegar = () => {
    Navigator('/newmessage');
  }
  return (
    <button className="buttonNew" onClick={navegar}>
      <FaRegCommentDots />
    </button>
  );
}

export default ButtonNew;