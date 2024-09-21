import React, { useState } from 'react'

function SingleBirthday({id,img,name,age,rem}) {

    // const [rem,setRem] = useState()

  return (
    <div className="d-flex my-2 justify-content-between align-items-center">
        <div className="left d-flex gap-5 justify-content-center align-items-center">
            <img width={60} height={60} className='rounded-circle' src={img} alt="" />
            <div className="d-flex flex-column">
                <h5 className='p-0 m-0'> {name} </h5>
                <p className="text-secondary p-0 m-0"> {age} Years Old </p>
            </div>
        </div>
        <div className="right">
            <button onClick={()=>rem(id)} className="btn btn-danger">Remove</button>
        </div>
    </div>
  )
}

export default SingleBirthday