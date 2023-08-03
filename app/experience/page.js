'use client'
import { Typewriter } from "react-simple-typewriter";
import Background from "../Background";
import Signature from "../Signature";
import Footer from "../Footer";
import Image from "next/image";
import NavBar from "../NavBar";
import { motion } from "framer-motion";
import { BsFillArrowDownCircleFill } from 'react-icons/bs';

export default function Home() {

    const rightCard = {
        offscreen: {
          x: -500
        },
        onscreen: {
          x: -250,
          rotate: 10,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
          }
        }
      };

    const leftCard = {
        offscreen: {
          x: 500
        },
        onscreen: {
          x: 250,
          rotate: -10,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
          }
        }
      };



    return (
        <>
            <Background styles={{position: "fixed"}}/>
            <Signature/>
            {/* <div className="w-full h-16 flex flex-col relative justify-center text-white overflow-y-scroll">
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
            </div> */}
            <main className="flex flex-col w-full h-screen relative justify-center items-center md:space-y-16">
                <div className="flex flex-col h-[90%] overflow-y-auto w-full text-white text-center justify-start relative">
                    <h1 className="text-center font-bold text-6xl tracking-wider bg-gradient-to-r from-red-300 from-20% via-purple-400 via-40% to-blue-600 to-80% bg-clip-text text-transparent mt-32 mb-8">
                        MY EXPERIENCE
                    </h1>
                    <motion.div
                        className="flex overflow-hidden items-center justify-center  pt-[250px] pb-[250px] ml-[50%] w-1/2 h-[600px]"
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                    >
                        <motion.div variants={rightCard} className="bg-white w-80 h-[400px] rounded-xl flex flex-col items-center text-gray-900 pl-12 pr-2">
                            {/* <p className="text-black">Kaleido</p> */}
                            <img
                                src="https://yt3.googleusercontent.com/dVjfZA0zROzKKqZRwp0hsKEhlvO_BiDZF5PQzmEhVFS04Ah1LMZJAarOX2IMmcaXKQ_OgE4wrNY=s176-c-k-c0x00ffffff-no-rj"
                                className="rounded-full scale-75"
                            />
                            <h1 className="font-bold font-lg">Kaleido</h1>
                            <h2 className="ml-0 italic">Software &amp; Research Intern</h2>
                            <h2>Fall 2021 &amp; Spring 2022</h2>
                            {"   "}
                            <p className="ml-4">{"       "}Skills: Blockchain, JavaScript, Git</p>
                            <p className="ml-5">Highlights: Research presentation and JS Security Scripts</p>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="flex overflow-hidden items-center justify-center  pt-[250px] pb-[250px] mr-[50%] w-1/2 h-[600px]"
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                    >
                        <motion.div variants={leftCard} className="bg-white w-80 h-[400px] rounded-xl flex flex-col items-center text-gray-900 pr-16 pl-2">
                            <img
                                src="https://media.licdn.com/dms/image/C4E0BAQE6-spao_I96Q/company-logo_200_200/0/1637085113519?e=1698883200&v=beta&t=3fBHn0GoZNVPywF-FM1KdmyuuHRbmrI-523BIDmQQdU"
                                className="rounded-full scale-75"
                            />
                            <h1 className="font-bold font-lg">Hans Riemer Campaign</h1>
                            <h2 className="ml-0 italic">Research &amp; Policy Intern</h2>
                            <h2>Summer 2022</h2>
                            {"   "}
                            <p className="ml-4">{"       "}Skills: Outreach, Research</p>
                            <p className="ml-5">Highlights: 4,000+ Phonebank calls, Partner with high school for voter turnout</p>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="flex overflow-hidden items-center justify-center  pt-[250px] pb-[250px] ml-[50%] w-1/2 h-[600px]"
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                    >
                        <motion.div variants={rightCard} className="bg-white w-80 h-[400px] rounded-xl flex flex-col items-center text-gray-900 pl-12 pr-2">
                            {/* <p className="text-black">Kaleido</p> */}
                            <img
                                src="https://media.licdn.com/dms/image/C4E0BAQG1_7sJIsm6vg/company-logo_200_200/0/1671575377282?e=1698883200&v=beta&t=mCoVy2zHL4hIvK2OM5pw1JLR55CUums4jo9pQNaOPSo"
                                className="rounded-full scale-75"
                            />
                            <h1 className="font-bold font-lg">TurnUp</h1>
                            <h2 className="ml-0 italic">Team Lead</h2>
                            <h2>Summer 2022</h2>
                            {"   "}
                            <p className="ml-4">{"       "}Skills: Leadership, presentation</p>
                            <p className="ml-5">Highlights: Managed 10 person team</p>

                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="flex overflow-hidden items-center justify-center  pt-[250px] pb-[250px] mr-[50%] w-1/2 h-[600px]"
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                    >
                        <motion.div variants={leftCard} className="bg-white w-80 h-[400px] rounded-xl flex flex-col items-center text-gray-900 pr-16 pl-2">
                            <img
                                src="https://media.licdn.com/dms/image/D560BAQHwquDS4aF7RQ/company-logo_200_200/0/1682968458103?e=1698883200&v=beta&t=NrhmFWvN4yda1EKQ2tWaMD-LlzTCuh12K3Ev3xkAFJQ"
                                className="rounded-full scale-75"
                            />
                            <h1 className="font-bold font-lg">StandardDAO</h1>
                            <h2 className="ml-0 italic">Illicit Activity Research</h2>
                            <h2>Summer 2022</h2>
                            {"   "}
                            <p className="ml-4">{"       "}Skills: Writing, Case Law</p>
                            <p className="ml-5">Highlights: Wrote paper on wash trading, Policy proposal to CA state</p>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="flex overflow-hidden items-center justify-center  pt-[250px] pb-[250px] ml-[50%] w-1/2 h-[600px]"
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                    >
                        <motion.div variants={rightCard} className="bg-white w-80 h-[400px] rounded-xl flex flex-col items-center text-gray-900 pl-12 pr-2">
                            {/* <p className="text-black">Kaleido</p> */}
                            <img
                                src="https://media.licdn.com/dms/image/C560BAQEH7iePi8WXrg/company-logo_200_200/0/1654043947455?e=1698883200&v=beta&t=EvMSJF2eCR7w05e5bcG1G_QD0DvMK08fKFwD9RdfbtM"
                                className="rounded-full scale-75"
                            />
                            <h1 className="font-bold font-lg">Pupil</h1>
                            <h2 className="ml-0 italic">Software Engineer</h2>
                            <h2>Fall 2022 &amp; Spring 2023</h2>
                            {"   "}
                            <p className="ml-4">{"       "}Skills: React Native, Firebase, Agile</p>
                            <p className="ml-5">Highlights: Created flagship match feature for MVP</p>

                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="flex overflow-hidden items-center justify-center  pt-[250px] pb-[250px] mr-[50%] w-1/2 h-[600px]"
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                    >
                        <motion.div variants={leftCard} className="bg-white w-80 h-[400px] rounded-xl flex flex-col items-center text-gray-900 pr-16 pl-2">
                            <img
                                src="https://media.licdn.com/dms/image/C4D0BAQF6TmzLkch0dQ/company-logo_200_200/0/1561566354660?e=1698883200&v=beta&t=yjTuOwPXCQO3tPbNGnCvqkzOa53OmWE0QOycuyM6UV0"
                                className="rounded-full scale-75"
                            />
                            <h1 className="font-bold font-lg">Klann Lab at NYU</h1>
                            <h2 className="ml-0 italic">Computational Biology RA</h2>
                            <h2>Spring 2023</h2>
                            {"   "}
                            <p className="ml-4">{"       "}Skills: HPC, Bash, PyMol</p>
                            <p className="ml-5">Highlights: Molecular dynamics sims, Writing research</p>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="flex overflow-hidden items-center justify-center  pt-[250px] pb-[250px] ml-[50%] w-1/2 h-[600px]"
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                    >
                        <motion.div variants={rightCard} className="bg-white w-80 h-[400px] rounded-xl flex flex-col items-center text-gray-900 pl-12 pr-2">
                            {/* <p className="text-black">Kaleido</p> */}
                            <img src="https://media.licdn.com/dms/image/C4D0BAQFAQ0-ch4J8RQ/company-logo_200_200/0/1626284322036?e=1698883200&v=beta&t=UJTcDKr82gyWvV9KEc7HAUHmZfDo6WqTtqmQgJjP5CU" 
                            className="rounded-full scale-75" /> 
                            <h1 className="font-bold font-lg">Daloopa</h1> 
                            <h2 className="ml-0 italic">Deep Learning Intern</h2> 
                            <h2>Summer 2023</h2> 
                            <p className="ml-4">Skills: Python, Docker, Transformers</p> 
                            <p className="ml-5">Highlights: Built add-on to table transformer, debugged edge cases</p>
                        </motion.div>
                    </motion.div>
                    <div className="absolute overflow-y-scroll h-[550%] ml-[49.5%] mt-60 w-4 bg-gradient-to-b from-red-300 from-20% via-purple-400 via-40% to-blue-600 to-80%">
                        <BsFillArrowDownCircleFill
                            color="#000000"
                            className="fixed z-5 bottom-16 scale-150"
                        />
                    </div>
                </div>
                <NavBar/>
                <Footer/>
            </main>
        </>
    )
}