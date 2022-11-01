import './ErrorField.css';
const ErrorField = ({ msj='' }) => {
  return (
    <section class="error">
      {msj}
    </section>
  );
}

export default ErrorField;
