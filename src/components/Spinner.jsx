import React from 'react'
import "./Spinner.css"

const Spinner = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className="spinner my-8">
      </div>
      <div>
        <p>Loading...</p>
      </div>
    </div>
  )
}

export default Spinner
