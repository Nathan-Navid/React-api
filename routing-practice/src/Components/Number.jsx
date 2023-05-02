import React from 'react'
import {useParams} from 'react-router-dom'

const Number = () => {
        const{num} = useParams()
        const num1 = parseInt(num)

    return (
    <div>
        <h1 className='mt-5'>The Number is: {num1}</h1>
    </div>
)
}

export default Number