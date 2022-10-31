import React from "react"
import styled from "styled-components";

const Modelo = styled.div`
    background: #F9F9F9;

    &:hover {
        transform: rotate(6deg) scale(1.1) skew(8deg);
        transition: 0.2s;
    }
`

const CapaImagem = styled.img`
    height: 300px;
    width: 210px;
`

const NomeCapa = styled.div`
    padding: 6px 0;
    color: #181818;
    text-align: center;
`

export default function Capa(props){
    return <Modelo>
        <CapaImagem src={props.imagem} alt='Capa Livro'/> 
        <NomeCapa> {props.nome} </NomeCapa>

    </Modelo>
}