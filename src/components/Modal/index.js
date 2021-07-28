import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { ModalBackground, ModalArea } from './styled';

const Modal = (props) => {

    const handleBackgroundClick = () => {
        props.setVisible(false);
    }
    
    return (
        <>
        {props.visible &&
            <ModalBackground>
                
                <ModalArea>
                    {props.children}
                    <div>
                    <Button onClick={handleBackgroundClick} variant="contained" color="secondary">Fechar</Button>
                    </div>
                </ModalArea>
            </ModalBackground>
        }
        </>
    )
}

export default Modal;