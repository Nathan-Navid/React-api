import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div >
        <h3 className='text-danger'>Home Component</h3>
        <Link to={"/about"} className='btn btn-success text-light'>Go to About</Link>
    </div>
  )
}

export default Home;