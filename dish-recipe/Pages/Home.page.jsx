import React, { Component } from 'react'
import Navbar from '../src/Components/Navbar.Component'


const Home= () => {
  return (
   <>
   <Navbar />
   <Component {...props} />
   <div className='main  '>
  <h1 className=' text-gray-800 text-2xl flex w-full h-full justify-center font-mono font-bold pt-10'>Food Recipes from around the world</h1>
</div>
   </>
  )
}

export default Home
