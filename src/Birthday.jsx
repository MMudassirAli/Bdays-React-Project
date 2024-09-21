import React, { useState } from 'react'
import SingleBirthday from './SingleBirthday'
import { bdays } from './data'

function Birthday() {

    const [data,setData] = useState(bdays)

    const remove = (id) => {
        const newBdays = data.filter((item,index)=>{
            return item.id !== id
        })

        setData(newBdays)
    }

    const handleDelete = () => {
        if(data.length == 0){
            setData(bdays)
        }else{
            setData([])
        }
    }
  return (
    <>
    <div className="container col-lg-5 mx-auto rounded-3 p-4 shadow">
        <h1 className="text-center display-5">
            {data.length} Birthdays Today
        </h1>
        {
            data.map((item,index)=>{
                return <SingleBirthday rem={remove} {...item} key={item.id} />
            })
        }

        <button onClick={handleDelete} className= {`btn w-100 my-2 ${data.length > 0 ? 'btn-danger' : 'btn-success' } `} >
            {
                data.length > 0 ? 'Remove All' : 'Refresh All'
            }
        </button>
    </div>
    </>
  )
}

export default Birthday