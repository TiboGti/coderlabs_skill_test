import React, { Component } from 'react'
import './styles/rym.css'
import Logo from '../assets/rym.png'
import  { Character} from '../components/character'
import CharacterCard from '../components/CharacterCard'




const pagerym = () => {

    if(character.state.error){
      return "ERROR!!";
    }
    
    return (
      

        <div className="rym__cont">
            <div className="container cont">
                <img className="Logo" src={Logo} alt="Rick y Morty" />
                    <div className="row">
                      {

                         Character.state.results.map(character =>(
                          <div className="col-md-3 col-6" key={this.state.results.id}>
                            <CharacterCard character={character}/>
                          </div>

                        ))}

                          {Character.state.loading && <p className="text-center">Loading...</p>}

                          {!Character.state.loading && Character.state.data.info.next && (
                            <button onClick={() => Character.fetchCharacters()}>Load More</button>
                          )}

                    </div>
            </div>
        </div>
    )
}

export default pagerym
