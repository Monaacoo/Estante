import React from "react"
import Topo from "../components/Topo"
import Estante from "../components/Estante"
import Capa from "../components/Capa"


export default function Incio(){
    return<>

        <Topo titulo="Estante"/>
        <Estante>
            
            <Capa imagem="https://m.media-amazon.com/images/I/51ZzKM4Gr2L.jpg" nome="Patinho Feio"/>
            <Capa imagem="https://m.media-amazon.com/images/I/51HSQRrpu3L.jpg" nome="Jogos Vorazes"/>
            <Capa imagem="https://m.media-amazon.com/images/I/514tKci6HIL.jpg" nome="Anne Frank"/>
            <Capa imagem="https://picsum.photos/200/300?random=1" nome="Teste"/>
            <Capa imagem="https://m.media-amazon.com/images/I/71peoM4V0lL.jpg" nome="Sobrevivendo no Inferno"/>

        </Estante>

    </>
}