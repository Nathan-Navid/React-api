import React from 'react'
import { useParams } from 'react-router-dom'

const Params = () => {
    const {word,color,bgColor} = useParams()
  return (
    <div>
        {
            isNaN(word)?
            <h2 className='mt-5' style={
                    color?
                    {color:color, backgroundColor:bgColor}
                    :null
                }>
                    This is word : {word}
            </h2>
            :
            <h1 className='mt-5'>
                    This is number: {word}
            </h1>

        }
    </div>
  )
}

export default Params