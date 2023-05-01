import React from 'react'
import { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

const Hello = () => {
  const {name, num} = useParams()
  useEffect(()=>{
    axios.get(`https://swapi.dev/api/people/${num}`)
      .then(res=>console.log(res))
      .catch(err=>console.log(err))
  },[])

  return (
    <div>
        <h1 className='text-primary mt-3'>This is Hello Page! </h1>
        {name == "Gray" ? <h2>Hey, you are so cool!</h2> : <h2>You are not Gray, so I am so sorry</h2>}
        {/* <h2>Hello {name}!</h2> */}
    </div>
  )
}

export default Hello