import axios from "axios";
import { useEffect, useState } from "react";
import '../pages/index.css'
const Pokemon = () => {
   const [Pokemon,setPokemon] = useState([]);

   useEffect(()=>{
    axios.get("https://pokeapi.co/api/v2/pokemon")
    .then(Response=>{
        setPokemon(Response.data.results);
    })
    .catch(error=> {
        console.log(error);
    });
   },[]); 
    return (
        <div>
          <div class="Div"><img className="poke-logo" src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-8.png"></img></div>
          <ul>
            {Pokemon.map(Pokemon=>(
          
              <li>
                <h3 class="poke-name">{Pokemon.name}</h3>
                <img class="poke-image" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${Pokemon.url.split('/')[6]}.png`} /> 
                <h3>{Pokemon.order}</h3>
              </li>  
            )
                )}
          </ul>  
        </div>

    )

}
export default Pokemon;