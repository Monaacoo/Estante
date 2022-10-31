import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Inicio from "./pages/Inicio"
import Produto from "./pages/Produto"

export default function Rotas(){
    return <BrowserRouter>
        <Routes>
            <Route index path="/" element={ <Inicio/> }/>

            <Route path="/produto" element={ <Produto/>}/>
        </Routes>
    </BrowserRouter>
}