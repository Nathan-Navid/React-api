import React from 'react'
import {Link} from 'react-router-dom'

const Navigate = () => {
  return (
    <div className='mt-5'>
        <h3><Link to={"/home"} className='btn btn-dark text-warning'>Got to Home</Link> || <Link to={"/hello"} className='btn btn-dark text-warning'>Got to Hello</Link> || <Link to={"/pizza"} className='btn btn-dark text-warning'>Got to Pizza</Link> || <Link to={"/unicorn"} className='btn btn-dark text-warning'>Got to Unicorn</Link> || <Link to={"/shavingcream"} className='btn btn-dark text-warning'>Got to Shaving Cream</Link>
        </h3>

    </div>
  )
}

export default Navigate