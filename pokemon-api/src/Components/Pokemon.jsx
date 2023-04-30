import React, {useEffect, useState} from 'react'

const Pokemon = () => {

    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(res => res.json())
        .then(data => setPokemon(data.results))
        .catch((err) => console.log(err))
    }, []);  
return (
    <div>
        <div className='title'>
            <p className='mt-3 text-warning '><strong>Fetch Pokemon</strong></p>
        </div>
        
        <ul>
        {
            pokemon.map((item,i)=>{
                return <li key={i}>{item.name}</li>}
            )
        }
        </ul>
    </div>
)
}

export default Pokemon