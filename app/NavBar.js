"use client"
import Link from 'next/link'
import { motion, useCycle } from "framer-motion"
import { MenuToggle } from './MenuToggle'
import { BsPersonBadge, BsBriefcase, BsInboxesFill } from 'react-icons/bs'
import { FaHome } from 'react-icons/fa'


export default function NavBar() {

    const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "200%" }
    }

    const listvariants = {
        open: {
            transition: { staggerChildren: 0.07, delayChildren: 0.2 }
        },
        closed: {
            transition: { staggerChildren: 0.05, staggerDirection: -1 }
        }
    };

    const itemvariants = {
        open: {
            y: 0,
            opacity: 1,
            transition: {
            y: { stiffness: 1000, velocity: -100 }
            }
        },
        closed: {
            y: 50,
            opacity: 0,
            transition: {
            y: { stiffness: 1000 }
            }
        }
    };
    
    const [isOpen, toggleOpen] = useCycle(false, true);

    return (
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          className={`z-10 ${isOpen ? "block" : "none"}`}
        >
          <MenuToggle toggle={() => toggleOpen()} />
          <motion.div className="absolute top-0 bottom-0 right-0 w-[25%] p-4 py-12 md:p-12 flex flex-col bg-gray-200" variants={variants}>
            <motion.ul
              variants={listvariants}
              className='space-y-8'
            >
              <motion.li
                variants={itemvariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/" className='flex flex-row items-center space-x-2 w-full'>
                  <div className='border-2 border-[#111827] rounded-full p-2'><FaHome size="2em" color='#111827'/></div>
                  <div className='hidden md:flex border-2 border-[#111827] w-full text-center rounded-full p-2 text-[#111827]'>Home</div>
                </Link>
              </motion.li>
              <motion.li
                variants={itemvariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/about" className='flex flex-row items-center space-x-2 w-full'>
                  <div className='border-2 border-[#FF99FF] rounded-full p-2'><BsPersonBadge size="2em" color='#FF99FF'/></div>
                  <div className='hidden md:flex border-2 border-[#FF99FF] w-full text-center rounded-full p-2 text-[#FF99FF]'>About Me</div>
                </Link>
              </motion.li>
              <motion.li
                variants={itemvariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className='flex flex-row items-center space-x-2'
              >
                <Link href="/experience" className='flex flex-row items-center space-x-2 w-full'>
                  <div className='border-2 border-[#CC99CC] rounded-full p-2'><BsBriefcase size="2em" color='#CC99CC'/></div>
                  <div className='hidden md:flex border-2 border-[#CC99CC] w-full text-center rounded-full p-2 text-[#CC99CC]'>Experience</div>
                </Link>
              </motion.li>
              <motion.li
                variants={itemvariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className='flex flex-row items-center space-x-2'
              >
                <Link href="/projects" className='flex flex-row items-center space-x-2 w-full'>
                  <div className='border-2 border-[#0099FF] rounded-full p-2'><BsInboxesFill size="2em" color="#0099FF"/></div>
                  <div className='hidden md:flex border-2 border-[#0099FF] w-full text-center rounded-full p-2 text-[#0099FF]'>Projects</div>
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>
        </motion.nav>
    )
}