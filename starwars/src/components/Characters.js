import React from 'react'

export default  function Characters(props){
    return(
        <div className="character-card">
          <div className="name">
             <h1>{props.characterProps.name}</h1>
          </div>
          <div className="info">
            <h3>Birthdate: {props.characterProps.birth_year}</h3>
            <h3>Gender: {props.characterProps.gender}</h3>
            <h3>Height: {props.characterProps.height}</h3>
            <h3>Hair Color: {props.characterProps.hair_color}</h3>
          </div>
        </div>
    );
}