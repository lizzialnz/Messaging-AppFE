import './navbar.css';
import Logo from '../images/logosintexto.png';
const NavBar = ({ title }) => {
  return (
    <nav className="navbar">
      <b>{title}</b>
      <img src={Logo} alt=""/>
    </nav>
  )
}

export default NavBar;
