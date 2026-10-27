import React from 'react'

const Footer = () => {

    const year = new Date().getFullYear();

  return (
    <div className='bg-[#1d3557] backdrop-blur text-white py-4 text-center'>
        <p className='mb-0'> &copy; {year}. All Rights Reserved. </p>
    </div>
  )
}

export default Footer