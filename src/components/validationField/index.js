import './validationField.css';
const ValidationField = ({ user, email, password, name, phone}) => {
     const msj="Todos los campos son obligatorios";
    if(!user || !email || !password ||!name || !phone){
        return (
            <section class="error">
              {msj}
            </section>
          );
    }
}

export default ValidationField;
