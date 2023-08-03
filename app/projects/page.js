'use client'
import { Typewriter } from "react-simple-typewriter";
import Background from "../Background";
import Signature from "../Signature";
import Footer from "../Footer";
import Image from "next/image";
import NavBar from "../NavBar";
import { motion } from "framer-motion";
import projects from "./projects"
import { SocialIcon } from "react-social-icons";


export function Card({ name, date, stack, tags, link, description }) {
  return (
    <div className="bg-black text-white rounded-3xl text-center flex flex-col h-96 p-6 border border-white justify-between w-full">
      <div>
        <h1 className="font-bold text-lg">{name}</h1>
        <h2 className="italic">{date}</h2>
        <div className="flex flex-row gap-2 text-white">
          {tags.map((tag, i) => (
            <div key={i} className="rounded-full px-2 py-1 bg-purple-400">{tag}</div>
          ))}
        </div>
        <p>{description}</p>
      </div>
      <div className="flex flex-col justify-center w-full items-center">
        <p>Stack: {stack}</p>
        <SocialIcon url={link}/>
      </div>
    </div>
  )
}

export default function Home() {

    return (
        <>
            <Background styles={{position: "fixed"}}/>
            <Signature/>
            <main className="flex flex-col w-full h-screen relative justify-center items-center md:space-y-16">
                <h1 className="text-center font-bold text-6xl tracking-wider bg-gradient-to-r from-red-300 from-20% via-purple-400 via-40% to-blue-600 to-80% bg-clip-text text-transparent mt-32 mb-0">
                  PROJECTS
                </h1>
                <div className="grid grid-cols-3 gap-8 w-[90%] grid-flow-row overflow-y-scroll items-center justify-center -mt-12 ml-2">
                  {projects.map((project, i) => (
                      <Card key={i} className="col-span-1" name={project.title} date={project.date} stack={project.stack} tags={project.tags} description={project.description} link={project.link}/>
                  ))}
                </div>
                <NavBar/>
                <Footer/>
            </main>
        </>
    )
}