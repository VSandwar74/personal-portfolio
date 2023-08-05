'use client'
import { Typewriter } from "react-simple-typewriter";
import Background from "../Background";
import Signature from "../Footer";
import Footer from "../Signature";
import Image from "next/image";
import NavBar from "../NavBar";
import { motion } from "framer-motion";
import projects from "./projects"
import { SocialIcon } from "react-social-icons";
import Mask from "../mask";


export function Card({ name, date, stack, tags, link, description, i }) {

  function getColor(i) {
    const remainder = i % 3;
    
    if (remainder === 0) {
      return 'bg-red-300'; // Red-300 color class
    } else if (remainder === 1) {
      return 'bg-purple-400'; // Purple-400 color class
    } else {
      return 'bg-blue-600'; // Blue-600 color class
    }
  }

  return (
    <div className="bg-black text-white rounded-3xl text-center flex flex-col h-96 p-6 border border-white justify-between w-full">
      <div className="">
        <h1 className="font-bold text-lg">{name}</h1>
        <h2 className="italic">{date}</h2>
        <div className="flex flex-row gap-2 text-white">
          {tags.map((tag, j) => (
            <div key={j} className={`rounded-full px-3 py-1 ${getColor(i)}`}>{tag}</div>
          ))}
        </div>
        <p>{description}</p>
      </div>
      <div className="flex flex-col justify-center w-full items-center">
        <p>Stack: {stack}</p>
        {link ? <SocialIcon url={link}  fgColor='#000000' bgColor='#FFFFFF'/> : <></>}
      </div>
    </div>
  )
}

export default function Home() {

    return (
        <Mask>
            <Background styles={{position: "fixed"}}/>
              <main className="flex flex-col w-full h-screen relative justify-center items-center md:space-y-16">
                  <h1 className="text-center font-bold text-6xl tracking-wider bg-gradient-to-r from-red-300 from-20% via-purple-400 via-40% to-blue-600 to-80% bg-clip-text text-transparent mt-32 mb-0">
                    PROJECTS
                  </h1>
                  <div className="w-full grid grid-cols-3 gap-8 px-[5%] grid-flow-row overflow-y-scroll items-center justify-center -mt-12 ml-2">
                    {projects.map((project, i) => (
                        <Card key={i} className="col-span-1" name={project.title} date={project.date} stack={project.stack} tags={project.tags} description={project.description} link={project.link} i={i}/>
                    ))}
                  </div>
                <NavBar/>
                <Signature/>
                <Footer/>
            </main>
        </Mask>
    )
}