import './validationField.css';
const ValidationField = ({ user, email, password, name, phone}) => {
     const msj="Debe llenar todos los campos";
    if(!user || !email || !password ||!name || !phone){
        return (
            <section class="error">
              {msj}
            </section>
          );
    }
}

export default ValidationField;
