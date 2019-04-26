import React from 'react';
import Character from './Characters'



const CharacterList = props => {
    console.log(props.starwarsChars)
    return (

        <div className= 'character-list'>
            {props.starwarsChars.map( characterInMap => (
                <Character key={characterInMap.name}
                characterOnProps={characterInMap}/>

            ))};
        </div>
    );
};



export default CharacterList; 


