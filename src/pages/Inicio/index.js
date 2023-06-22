import "./index.css"
import Title from "../../components/title";
import Botao from "../../components/button";
import { Link } from "react-router-dom";
import Curiosidades from "../Curiosidades";
function Inicio(){

    return (
      <div id="hollow">
     <Title text = "Boas vindas" />
    <Botao/>
    <Link to="/hobby">Meu hobby</Link>
    <link to="/Curiosidades">Minhas Curiosidades</link>
    <link to="/Contador">Contador</link>
    
      </div>
    )
    }

  export default Inicio;