import { Pokemon } from "../types/Pokemon"

const Pokedex = (props:{pokemonList: Pokemon[]}) => {

    console.log(props.pokemonList)

    return(
        <>
            <h1>Pokedex</h1>
            {props.pokemonList.map((pokemon: Pokemon) => {
                return pokemon.name
            })}
        </>
    )
    
}

export default Pokedex