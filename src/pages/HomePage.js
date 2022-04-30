import React from "react"
import TypeWriter from "../functions/TypeWriter"
import { MainHome } from "../style/HomeStyle"

function HomePage () {
    return(
        <MainHome>
            <TypeWriter value="Bem vindo a Tria Digital!" />
        </MainHome>
    )
}

export default HomePage