import React from 'react'
import { Link } from 'react-router-dom';

const Generate = () => {
  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-gray-200">

    <div>
      <h2> Your Will is almost done!!</h2>

    </div>
    <div>
    <Link to="/Download">
      <button
      className="btn w-1/2"
      onClick={this.continue}>Download</button>
      </Link>
    </div>
    </div>
  )
}

export default Generate;
