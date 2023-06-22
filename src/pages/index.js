import { Link } from "react-router-dom";
const Sobre = () => {
    //js
    const clicando = () => {
        //ação
        alert("oi");

    }
    return (
        <div>
            <h1>Boas vindas a lista de pokemon</h1>
            <h3>Nesse link voçê verá alguns dos famosos pokemon</h3>
            <Link to="/Pokemon">Pokemon</Link>
           
        </div>

    )

}
export default Sobre;