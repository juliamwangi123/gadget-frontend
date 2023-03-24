import React from 'react'

const Error = ({error}) => {
  return (
    <div className='bg-red-100 max-w-[800px] w-full rounded-md text-red-500'>
          <h1 className='text-2xl uppercase py-2 sm:py-6 px-4 tracking-wider text-center'>{ error }</h1>
    </div>
  )
}

export default Error
