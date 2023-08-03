"use client"
import { Typewriter } from 'react-simple-typewriter'
import { motion } from "framer-motion"

export default function Hero() {
    return (
        <div className='flex flex-col text-center justify-center items-center'>
        <motion.img
          className='rounded-full h-[50%] w-[50%] p-0 border-white border-opacity-10 border-8 hover:opacity-100'
          src="https://pbs.twimg.com/profile_images/1623069204512403457/3D4_Il9u_400x400.jpg"
        />
        <h1 className='text-white text-6xl block font-bold mt-4'>
          <span className='bg-gradient-to-r from-red-300 from-20% via-purple-400 via-40% to-blue-600 to-80% bg-clip-text text-transparent tracking-wide'>
            VISHAKH SANDWAR
          </span>
        </h1>
        <h3 className='text-white text-lg font-semibold'>
          <Typewriter
            words={['Welcome to my website!', 'Click the top right to check it out!', 'Math, Software, & Trading']}
            loop={false}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h3>
      </div>
    )
}