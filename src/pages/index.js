import { Link } from "react-router-dom";
import '../pages/index.css'
const Sobre = () => {
    //js
    const clicando = () => {
        //ação
        alert("oi");

    }
    return (
        <div>
            <div class="bah">
            <h1>Boas vindas a lista de pokemon</h1>
            <h3>Nesse link você verá alguns dos famosos pokemon</h3> </div>
            <Link class="link" to="/Pokemon">Pokemon</Link>
           
        </div>

    )

}
export default Sobre;