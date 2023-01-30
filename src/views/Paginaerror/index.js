import Page from '../../components/page';
import '../css/version.css'
import Logo from '../../components/images/logosintexto.png';

//aqui se crea el componente para mostrar pagina no encontrada
const Paginaerror = () => {

  return (
    <Page
      useAbsoluteCenter={true}
      showNavBar={false}
    >
      <div className="h1VersionStyle">
      <img src={Logo} alt=""></img>
      <h1>Ups!, Pagina no Encontrada <br /> Error:404</h1>
      </div>
    </Page>
  )
}

export default Paginaerror;

