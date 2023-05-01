import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'

const Home = () => {
    const [name, setName] = useState("")
    const [comment, setComment] = useState("")
    const navigate = useNavigate();

    const sendSurvey = (e)=>{
        e.preventDefault()
        navigate("/hello")
    }
return (
    <div>
        <h1 className='text-dark mt-3'>This is Home Page! </h1>
        <form className='form' action="" onSubmit={sendSurvey}>
            <div className='form-group mt-3'>
                <label htmlFor="name">Name:</label>
                <input type="text" value={name} onChange={(e)=> setName(e.target.value)} name="name" className='form' />
            </div>
            <div className='form-group mt-4'>
                <label htmlFor="comment">Comment:</label>
                <textarea name="comment" value={comment} onChange={(e)=> setComment(e.target.value)} id="" cols="20" rows="5"></textarea>
            </div>
            <button className='btn btn-success' type="submit">Submit</button>
        </form>
        
        <Link to={"/navigate"} className='btn btn-dark text-warning mt-3'>Got to Navigate</Link>
    </div>
)
}

export default Home