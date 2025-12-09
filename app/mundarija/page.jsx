import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Mundarija from './../components/mundarija';

const page = () => {
  return (
    <div>
      <Navbar />

      <div className='bg-[#1a8ec1] m-4 py-3'>
        <h1 className='text-center font-bold text-2xl text-white'>Table of grammar contents – Beginner</h1>
      </div>

      <div>
        <p className='m-4'>
          <span className='some-blue-text'>Grammar / Beginner Grammar lessons and exercises /</span>    Table of grammar contents – Beginner
        </p>

      </div>
      <div>
        <Mundarija />
      </div>
      <Footer />

    </div>
  )
}

export default page