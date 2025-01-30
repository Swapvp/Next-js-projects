import React from 'react'

const page = ({params}:{params:{id:string}}) => {
   const {id} = params
  return (
    <div>
        <h1 className='text-lg'>User Profile {id}</h1>
    </div>
  )
}

export default page