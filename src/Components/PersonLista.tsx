import React, { useState } from 'react'

import data from "../assets/persons.json"

type PersonListaProps = {
    name: string;
    age: number;
}

const PersonLista = () => {
    const [pers, setPers] = useState<PersonListaProps[]>([{name: "Eva", age: 43}, {name: "Anne", age: 46}, {name: "Helena", age: 50}])

  return (
    <div className='person'>
        <h2>Lista systrar</h2>
        <ul>
            {pers.map((per, index) => (
                <li key={index}>{per.name} {per.age}</li>
            ))}
         
        </ul>
      
    </div>
  )
}

export default PersonLista
