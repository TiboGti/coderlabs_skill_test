import React from 'react'
import './styles/charactercard.css'

const CharacterCard = () => {
    return (
        <div>
             <div className="characterCard"style={{ backgroundImage: `url(${character.image})` }}
                >
                <div className="characterCard__name-container text-truncate">
                    {character.name}
                </div>
            </div>
        </div>
    )
}

export default CharacterCard
