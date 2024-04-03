'use client'
import { useTypewriter, Typewriter } from "react-simple-typewriter";
import Background from "../Background";
import Signature from "../Footer";
import Footer from "../Signature";
// import Image from "next/image";
import Image from "next/image";
import NavBar from "../NavBar";
import { AiOutlinePaperClip } from 'react-icons/ai';
import { motion } from "framer-motion";
import Mask from "../mask";

export default function Home() {

    const [text, helper] = useTypewriter({})

    const { isDone } = helper;

    const variants = {
        visible: { scale: 1 },
        hidden: { scale: 0 },
      }


    return (
        <Mask>
            <Background/>
            <main className="flex flex-col min-h-screen w-full relative justify-center items-center md:space-y-8">

                <div className="flex flex-col w-full justify-center items-center relative">
                    <h1 className="text-center font-bold text-6xl tracking-wider bg-gradient-to-r from-red-300 from-20% via-purple-400 via-40% to-blue-600 to-80% bg-clip-text text-transparent mb-8">
                        ABOUT ME!
                    </h1>
                    <div className="w-[80%] md:w-[65%] flex flex-col-reverse md:flex-row justify-center space-x-4">
                        <p className="text-white text-sm md:text-lg w-[100%] md:w-[50%] ">
                            <Typewriter
                                words={[`Thanks for checking out my page! I'm a second year at New York University/NYU Stern intending to major in Finance and Math with a minor in Computer Science. 
                                At school I'm active in our quant and blockchain clubs and am currently researching in the Klann Lab. Following industry protocol I don't post my quant pitches but if 
                                you're interested please contact me using any of the links below. In terms of future careers I'm interested in interning at companies with strong technical wings whether
                                they be software firms, quant funds, data companies, etc. 
                                `]}
                                // loop={false}
                                cursor
                                cursorStyle='|'
                                typeSpeed={2}
                                deleteSpeed={50}
                                delaySpeed={50}
                                />
                        </p>
                        {/* Add next image */}
                        <Image
                            src="https://i.ibb.co/9y5X3gD/image.png"
                            width={300}
                            height={550}
                            alt="Portrait photo of Vishakh"
                            className="border-4 border-white rounded-lg z-0"
                            />
                    </div>
                    <a href="https://drive.google.com/file/d/13pis9StRyFrKakNQJA-GcZ4H02VvtpK4/view?usp=sharing">
                        <motion.div 
                            initial={false}
                            variants={variants}
                            animate={isDone ? "visible" : "hidden"}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-white flex flex-row items-center space-x-4 bg-black border-white border-2 rounded-full px-4 py-2">
                            <AiOutlinePaperClip className=""/>
                            <h2>My Resume!</h2>
                        </motion.div>
                    </a>
                </div>
                <NavBar/>
                <Signature/>
                <Footer/>
            </main>
        </Mask>
    )
}