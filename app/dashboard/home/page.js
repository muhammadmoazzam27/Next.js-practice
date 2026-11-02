"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

const Home = () => {
  const router = useRouter();
  return (
    <div>
      <h1 className='py-3 text-2xl text-center font-bold'>Dashboard Home Page</h1>
      <div className='my-3 mx-2'>
        <p>This is navigate to the Home Page.</p>
        <button className='bg-blue-800 text-white rounded p-2 transition hover:bg-blue-600' onClick={() => router.push("/home")}>Back to Home</button>
      </div>
    </div>
  )
}

export default Home