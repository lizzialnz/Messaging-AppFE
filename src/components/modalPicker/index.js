import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Buttons from '../buttons';
import './ModalPicker.css';
import { FaBars } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import ButtonLogout from '../buttonLogout';

const ModalPicker = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const Navigator = useNavigate();

    const usuario = () => {
        Navigator('/login');
    }
    const messagesSent = () => {
        Navigator('/messages');
    }
    const messagesRec = () => {
        Navigator('/messagesrec');
    }
    const updateUser = () => {
        Navigator('/updateuser');
    }
    return (
        <div>
            <div className="prebutton-s">
                <button className="buttons-s"  onClick={handleOpen}><FaBars /></button>
            </div>
            <Modal
                hideBackdrop
                open={open}
                onClose={handleClose}
            >
                <Box sx={{ ...style, width: 250 }}>
                    <div className='preclose'><button className='closebutton' onClick={handleClose}><FaWindowClose /></button></div>
                    <div style={{textAlign: "center"}}>
                    <Buttons>
                        <button class="button button1" onClick={messagesSent}>Sent</button>
                        <button class="button button2" onClick={messagesRec}>received</button>
                        <button class="button button1" onClick={updateUser}>Ajustes</button>
                    </Buttons>
                    <ButtonLogout>   
                    </ButtonLogout>
                    </div>
                </Box>
            </Modal>

        </div>

    );
}


const style = {
    backgroundColor: "rgba(255, 255, 255, 0.712)",
    borderRadius: 10,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    textAlign: "center",
};

export default ModalPicker;
