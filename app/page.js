"use client"
import Background from './Background'
import NavBar from './NavBar'
import Hero from './Hero'
import Signature from './Signature'

export default function Home() {

  return (
    <>
      <Background/>

      {/* <div className='text-white fixed -left-10 top-[50%]'>
        <p className='-rotate-90 tracking-tighter'>Vishakh Sandwar</p>
      </div> */}
      <Signature/>
      
      <main className="flex min-h-screen flex-col items-center justify-center scrol z-1 relative overflow-x-hidden">

        <Hero/>

      </main>
      <NavBar/>
    </>
  )
}
