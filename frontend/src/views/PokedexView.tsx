import { useState } from "react"

import HeroSection from "../components/HeroSection"
import Footer from "../components/Footer"
import Pokedex from "../components/Pokedex"
import { pokemonsArray } from "../data"
import { Pokemon } from "../types/Pokemon"

const PokedexView = () => {
    const [pokemonList] = useState<Pokemon[]>(pokemonsArray)

    return (
      <>
        <HeroSection />
        <Pokedex pokemonList={pokemonList}/>
        <Footer />
      </>
    )
}

export default PokedexView