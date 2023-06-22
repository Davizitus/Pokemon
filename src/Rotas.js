import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/index";
import Sobre from "./pages";
import Pokemon from "./pages/Pokemon";
 function Rotas(){
    return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={< Inicio/>} exact />
        <Route path="/sobre" element={< Sobre/>} exact />
        <Route path="/Pokemon" element={< Pokemon/>} exact />
    </Routes>
    </BrowserRouter>    
    )
 }
 export default Rotas;