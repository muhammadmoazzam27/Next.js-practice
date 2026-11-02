"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

const About = () => {
  const router = useRouter();
  return (
    <div>
      <h1 className='py-3 text-2xl text-center font-bold'>About Page</h1>
      <div className='my-3 mx-2'>
        <p>This is navigate to the Home Page.</p>
        <button className='bg-blue-800 text-white rounded p-2 transition hover:bg-blue-600' onClick={() => router.push("/home")}>Home Page</button>
      </div>
      <div className='my-3 mx-2'>
        <p>This is navigate to the Contact Page.</p>
        <button className='bg-blue-800 text-white rounded p-2 transition hover:bg-blue-600' onClick={() => router.push("/contact")}>Contact Page</button>
      </div>
      <div className='my-3 mx-2'>
        <p>This is navigate to the Dashboard Home Page.</p>
        <button className='bg-blue-800 text-white rounded p-2 transition hover:bg-blue-600' onClick={() => router.push("/dashboard/home")}>Dashboard Page</button>
      </div>
    </div>
  )
}

export default About