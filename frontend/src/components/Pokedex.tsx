import { Pokemon } from "../types/Pokemon"
import PokemonCard from "./PokemonCard"
import "../assets/styles/components/pokedex.scss"


const Pokedex = (props: {pokemonList: Pokemon[]}) => {
    console.log(props.pokemonList)

    return (
        <div>
            <div className="pokedex">
                <div className="main-container">
                    <h1>Pokedex</h1>
                    <div className="pokedex__list">
                        {props.pokemonList.map((pokemon: Pokemon) => (
                            <PokemonCard pokemon={pokemon}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pokedex