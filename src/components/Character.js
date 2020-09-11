// Write your Character component here

import React, { useState, useEffect } from "react";
import axios from "axios";
import styled, { keyframes} from "styled-components"

const keyFra = keyframes `
  50% {
    opacity: 0.5;
}
  100%{
    opacity: 1;
}`

const StyledCharacter = styled.div`
    background-color: ${props => props.theme.primaryColor};
    animation: ${keyFra} 10s backwards;
    color: ${props => props.theme.black} ;
`
const StyledBorder = styled.div`
    border:3px solid white;`


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
        <StyledCharacter>
            {
                character.length && character.map(character => {
                    return <StyledBorder>
                        <h3>NAME: {character.name}</h3>
                        <h4>BIRTH: {character.birth_year}</h4>
                        <h4>HEIGHT: {character.height}</h4>
                    </StyledBorder>
                })
            }
  
        </StyledCharacter>
    )
}

export default Character;