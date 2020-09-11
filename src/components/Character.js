// Write your Character component here

import React, { useState, useEffect } from "react";
import axios from "axios";

const Character = () => {
    const [character, setCharacter] = useState([])
    useEffect(() =>{
      axios.get("https://swapi.dev/api/people")
      .then((response) => {
        setCharacter(response.data.results)
      })
      .catch((error) =>{
        console.log(error)
      })
    }, [])
    return(
        <div>
            {
                character.length && character.map(character => {
                    return <div>
                        <h3>{character.name}</h3>
                        <div>{character.height}</div>
                        <div>{character.birthYear}</div>
                    </div>
                })
            }
  
        </div>
    )
}

export default Character;