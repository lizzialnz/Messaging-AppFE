import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import putUser from "../../services/api/updateuserApi";
import deleteUser from '../../services/api/deleteuserApi';
import { axiosPrivate } from "../../services/api/axios";

//aqui se importan los componentes para la vista
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Page from "../../components/page";
import { Field } from '../../components/inputField';
import Buttons from "../../components/buttons";
import ValidationField from "../../components/validationField";
import '../css/updateuser.css';

//varianles globales
/**aqui ira el session */var us = 'lizzi1'
var baseURL = `/users/user/${us}`;
var datos = []

//aqui se crea el componente updateuser para actualizar los datos de un usuario
const UpdateUser = () => {
  const [msj, setmsj] = useState(null);
  const Navigator = useNavigate();
  const [formValues, setFormValues] = useState({
    user: '',
    email: '',
    password: '',
    fullname: '',
    phone: '',
    codigo: ''
  });

  var userValue = formValues.user;
  var emailValue = formValues.email;
  var passwordValue = formValues.password;
  var fullnameValue = formValues.fullname;
  var phoneValue = formValues.phone;

  React.useEffect(() => {
    axiosPrivate.get(baseURL).then((response) => {
      datos = response.data;
      console.log(datos);
      setFormValues({ codigo: datos._id, user: datos.user, email: datos.email, fullname: datos.name, phone: datos.phone });

    });

  }, []);

  const onChangeHandler = (event) => {
    if (!formValues.user && !formValues.password && !formValues.email && !formValues.phone && !formValues.fullname) {
      setmsj('Debe llenar todos los campos');
    }
    let { name, value } = event.target;
    let newFormValues = {
      ...formValues,
      [name]: value
    }
    setFormValues(newFormValues);
  }

  const onUpdateClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!formValues.user && !formValues.password && !formValues.email && !formValues.phone && !formValues.fullname) {
      setmsj('Error, debe llenar todos los campos');
    } else {
      try {
        const data = await putUser(
          formValues.user,
          formValues.email,
          formValues.password,
          formValues.fullname,
          formValues.phone,
          formValues.codigo
        );
        console.log(data);
        Navigator("/messages");
      } catch (ex) {
        console.log(ex);
      }
    }
  }

  const onDeleteClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const data = await deleteUser(
        formValues.codigo
      );
      Navigator("/login");
      console.log(data);
    } catch (ex) {
      console.log(ex);
    }
  }

  const onMessagesClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    Navigator("/messages");
  }

  //aqui el modal 
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Page
        showNavBar={true}
        useAbsoluteCenter={true}
        pageTitle="Messages LApp"
      >
        <form className="form">
          <h1 className="titulo">Actualiza tu Información</h1>
          <Field
            name="user"
            labelText="Usuario"
            type="text"
            value={userValue}
            onChange={onChangeHandler}
          />
          <Field
            name="email"
            labelText="Email"
            type="email"
            value={emailValue}
            onChange={onChangeHandler}
          />
          <Field
            name="password"
            labelText="Contraseña"
            type="password"
            value={passwordValue}
            onChange={onChangeHandler}
          />
          <Field
            name="fullname"
            labelText="Nombre"
            type="text"
            value={fullnameValue}
            onChange={onChangeHandler}
          />
          <Field
            name="phone"
            labelText="Teléfono"
            type="text"
            value={phoneValue}
            onChange={onChangeHandler}
          />
          <ValidationField user={userValue} email={emailValue} password={passwordValue} name={fullnameValue} phone={phoneValue}></ValidationField>
          <div className="buttons">
            <Buttons>
              <button class="button button1" onClick={onUpdateClick}>Actualizar</button>
              <button class="button button2" onClick={onMessagesClick}>Cancelar</button>
            </Buttons>
            <Button onClick={handleOpen}>Eliminar mi cuenta</Button>
          </div>
        </form>
      </Page>
      <div>
      {/* aqui esta el modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <div className='modalstyle'>
          <h2 id="parent-modal-title">¿Esta seguro que desea eliminar su cuenta?</h2>
          <button class="button button1" onClick={onDeleteClick}>Aceptar</button>
          <button class="button button3" onClick={handleClose}>Cancelar</button>
        </div>
      </Modal>
    </div>
    </>
  );
}
export default UpdateUser;

