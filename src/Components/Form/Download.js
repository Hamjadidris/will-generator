import React from 'react'
import { Link } from 'react-router-dom';

const Download = () => {
  return (
    <div className="bg-gray-200 p-16">
    <div>
      <h2> Your Will is almost done!!</h2>
      <p>
        Kindly review all entered details. After downloading and closing this session, all data become un retrievable
        and un editable as we do not save a copy of your Will on our site. If you do wish to re-edit, you will have to start over again.
      </p>
      <p>
        Review, download, sign and keep thte original copy in a safe place. Make sure to review and update your will from time to time, whenever neccessary.
      </p>
      <p>
        Click on the DOWNLOAD button below, and be a little patient while we proccess your info and generate your Will.
      </p>
    </div>
    <div>
      <Link to="/About">
        <button className="w-1/2 border border-yellow-500  bg-yellow-500 text-white rounded-md p-2">Previous</button>
      </Link>
      <Link to="/Assets">
          <button className="w-1/2 border border-yellow-500  bg-yellow-500 text-white rounded-md p-2">Download</button>
       </Link>
    </div>
    </div>
  )
}

export default Download;
