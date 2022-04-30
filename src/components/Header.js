import React from "react";
import { Button, ContainerButton, ContainerLogo, MainHeader } from "../style/HeaderStyle";
import { useHistory } from 'react-router-dom'
import { goToHome, goToAbout, goToContact } from '../route/coordinator'

function Header () {
    const history = useHistory()

    return (
        <MainHeader>
            <ContainerLogo onClick={() => goToHome(history)}>
                <h1><b>3</b>RIA</h1>
                <h4>digital</h4>
            </ContainerLogo>

            <ContainerButton>
                <Button onClick={() => goToAbout(history)}>SOBRE</Button>
                <Button onClick={() => goToContact(history)}>CONTATO</Button>
            </ContainerButton>

        </MainHeader>
    )
}

export default Header