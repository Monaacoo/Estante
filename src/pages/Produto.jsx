import React from "react"
import Estante from "../components/Estante"
import Capa from "../components/Capa"
import Topo from "../components/Topo"


export default function Produto(){
    return<>

        <Topo titulo="Medo" />
        <h1> Terror </h1>
        <Estante>
            <Capa nome="It a coisa" imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtpOtCLRICkz9KOEG3vaXNEQu9hQQsKIddmA&usqp=CAU"/>
        </Estante>

    </>
}