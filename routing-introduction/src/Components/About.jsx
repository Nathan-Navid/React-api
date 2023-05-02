import React from 'react'
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <div>
        <h3 className='text-primary'>About Component</h3>
        <Link to={"/"} className="btn btn-dark text-warning">Go to Home</Link>
    </div>
  )
}

export default About