import Header from "./Header"
import charizardImg from '../assets/images/Charizard_SSBU.png'

import '../styles/heroSection.scss'

import { Link, useNavigate } from "react-router-dom"
import PokemonType from "./PokemonType"

const HeroSection = () => {

    const navigate = useNavigate()
    const navigateToPokemonDetails = () => {
        navigate('/pokemon/1')
    }


    return(
        <div className="hero-section">
            <div className="main-container">
            <Header />
                <div className="hero-content">
                    <div className="hero-data">
                        <span className="hero-data-number">#006</span>
                        <div className="hero-data-types">
                            <PokemonType type="fire" />
                            <PokemonType type="flying" />
                        </div>
                        <h1 className="hero-data-name">Charizard</h1>
                        <p className="hero-data-description">
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo exercitationem nam ab illo veritatis commodi velit corporis, ex saepe eius. Sed qui unde tempore aliquid provident aut aspernatur, quas ad.
                           Laboriosam pariatur, odio aspernatur ipsam possimus nulla doloremque. Quasi commodi quaerat eius, nostrum saepe atque ducimus laborum, laboriosam in animi maxime repudiandae, dignissimos laudantium voluptate itaque libero consequatur est? Aspernatur. 
                        </p>
                        <button className="hero-data-button" onClick={navigateToPokemonDetails}>
                            More details
                        </button>
                        {/* <Link to="pokemon/1">Lien vers le pokemon</Link> */}
                    </div>
                    <div className="hero-image">
                        <img src={charizardImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection