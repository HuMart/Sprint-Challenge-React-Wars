import react from 'react'
import Characters from './Characters'

export default function CharacterList(props)  {
  return (
      <div>
          {props.starwarsChars.map(charsInMap =>(
              <Characters key={charsInMap.name}
              characterProps={characterInMap} />
          ))};
      </div>
   );     
};


