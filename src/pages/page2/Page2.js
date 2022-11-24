import React from 'react'
import { Link } from 'react-router-dom';

const Page2 = () => {
  return (
    <div>
        <h1>GET USER INFO</h1>
        <Link to="/will">
            <button>To Page3</button>
         </Link>
    </div>
  )
}

export default Page2