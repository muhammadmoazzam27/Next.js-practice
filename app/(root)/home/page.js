"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Home = () => {
  const router = useRouter();
  return (
    <div>
      <h1 className='py-3 text-3xl text-center font-bold'>Home Page</h1>

      <p className='text-center text-2xl my-4'>By using the useRouter hook (client component &nbsp; "use client") in Next.js, page navigate to the other routes (URL). </p>

      <div className='my-3 mx-2'>
        <p>This is navigate to the About Page.</p>
        <button className='bg-blue-800 text-white rounded p-2 transition hover:bg-blue-600' onClick={() => router.push("/about")}>About Page</button>
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

export default Home