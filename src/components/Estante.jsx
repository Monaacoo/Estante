import React from "react"
import styled from "styled-components"

const Modelo = styled.div`
    background: #B7C4CF;
    margin: 32px 0;
    gap: 16px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`



export default function Estante(props){
    return <Modelo>
        {props.children}
    </Modelo>
}