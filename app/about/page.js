'use client'
import { useTypewriter, Typewriter } from "react-simple-typewriter";
import Background from "../Background";
import Signature from "../Signature";
import Footer from "../Footer";
import Image from "next/image";
import NavBar from "../NavBar";
import { AiOutlinePaperClip } from 'react-icons/ai';
import { motion } from "framer-motion";

export default function Home() {

    const [text, helper] = useTypewriter({})

    const { isDone } = helper;

    const variants = {
        visible: { scale: 1 },
        hidden: { scale: 0 },
      }


    return (
        <>
            <Background/>
            <Signature/>
            <main className="flex flex-col min-h-screen w-full relative justify-center items-center md:space-y-8">
                <div className="flex flex-col w-full justify-center items-center relative">
                    <h1 className="text-center font-bold text-6xl tracking-wider bg-gradient-to-r from-red-300 from-20% via-purple-400 via-40% to-blue-600 to-80% bg-clip-text text-transparent mb-8">
                        ABOUT ME!
                    </h1>
                    <div className="w-[65%] flex flex-row justify-center space-x-4">
                        <p className="text-white text-lg w-[50%]">
                            <Typewriter
                                words={[`Thanks for checking out my page! I'm a second year at New York University/NYU Stern intending to major in Finance and Math with a minor in Computer Science. 
                                At school I'm active in our quant and blockchain clubs and am currently researching in the Klann Lab. Following industry protocol I don't post my quant pitches but if 
                                you're interested please contact me using any of the links below. In terms of future careers I'm interested in interning at companies with strong technical wings whether
                                they be software firms, quant funds, data companies, etc. 
                                `]}
                                // loop={false}
                                cursor
                                cursorStyle='|'
                                typeSpeed={10}
                                deleteSpeed={50}
                                delaySpeed={100}
                                />
                        </p>
                        {/* Add next image */}
                        <img
                            // src="https://images.squarespace-cdn.com/content/v1/54455593e4b026d1c3c6f497/772569f1-f879-4aff-bf52-a61a74202a93/vishakh.jpg"
                            src="https://media.licdn.com/dms/image/C5603AQH2MEhn9EHnoQ/profile-displayphoto-shrink_400_400/0/1654121330712?e=1696464000&v=beta&t=ArDRR8f0-8hGwRd0zGi0DL8PA2t8Z5tzGVlNBMeuVUg"
                            width={300}
                            height={550}
                            alt="Portrait photo of Vishakh"
                            className="border-4 border-white rounded-lg z-0"
                            />
                    </div>
                    <a href="https://docs.google.com/document/d/1Ql5uNqdPU7n7GQLJIQ3bz1Pp8huwS_sH/edit?usp=sharing&ouid=100335745819517056832&rtpof=true&sd=true">
                        <motion.div 
                            initial={false}
                            variants={variants}
                            animate={isDone ? "visible" : "hidden"}
                            className="text-white flex flex-row items-center space-x-4 bg-black border-white border-2 rounded-full px-4 py-2">
                            <AiOutlinePaperClip className=""/>
                            <h2>My Resume!</h2>
                        </motion.div>
                    </a>
                </div>
                <NavBar/>
                <Footer/>
            </main>
        </>
    )
}