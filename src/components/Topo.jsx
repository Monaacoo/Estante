import React from "react"
import styled from "styled-components"

const Modelo = styled.div`
    background: #3F4E4F;
    color: #fff;
    padding: 34px;
`
const ModeloTitulo = styled.div`
    padding-top: 100px;
    text-align: center;
    font-size: 30pt;
`

export default function Topo(props){
    return <Modelo>
        <ModeloTitulo>
            {props.titulo}
        </ModeloTitulo>

    </Modelo>
}