import styled from 'styled-components'
import { pink, yellowOne, yellowTwo } from './constants'

export const MainHeader = styled.div`
    display: flex;
    height: 13vh;
    justify-content: space-between;
    background-color: transparent;
    padding-right: 4vw;
    padding-left: 4vw;
`

export const ContainerLogo = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;

    h1{
        margin-bottom: 0;

        b{
            color: ${yellowOne};
        }
    }

    h4{
        margin-top: -4px;
        align-self: center;
        letter-spacing: 4px;
        color: ${pink};
    }

    :hover{
        cursor: pointer
    }
`

export const Button = styled.button`
    margin-top: 6vh;
    margin-left: 1vw;
    margin-right: 1vw;
    background-color: transparent;
    border: none;
    color: ghostwhite;
    font-size: 1em;
    :hover{
        color: ${yellowTwo};
        cursor: pointer
    }
    :active{
        color: ${yellowOne};
    }
    @media(max-width: 800px){
        font-size: 14px;
        margin-top: 0;
        margin-bottom: 2vh;
    }
`

export const ContainerButton = styled.div`
    display: flex;
    justify-content: space-between;
    width: 25vw;

`