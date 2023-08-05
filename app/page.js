"use client"
import Background from './Background'
import NavBar from './NavBar'
import Hero from './Hero'
import Signature from './Footer'
import Footer from './Signature'
import Mask from './mask'

export default function Home() {

  return (
    <Mask>
      <Background/>

      <main className="flex min-h-screen flex-col items-center justify-center scrol z-1 relative overflow-x-hidden">

        <Hero/>

      </main>
      <NavBar/>
      <Signature/>
      <Footer/>
    </Mask>
  )
}
