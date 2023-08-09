'use client'
import { motion, AnimatePresence } from 'framer-motion';

export default function Mask({ children }) {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className='out'>
            {/* <AnimatePresence mode='wait' exit className="elevator-container"> */}
            <AnimatePresence initial={false} mode='popLayout'>
                {children}
            </AnimatePresence>
                {/* <motion.div 
                    animate={{ x: ['-100%', '0%', '0%', '0%', '-100%'] }}
                    transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut"}}
                    className='elevator left z-1 bg-gray-700 border border-white'></motion.div>
                <motion.div
                animate={{ x: ['-100%', '0%', '0%', '0%','0%', '0%', '-100%'] }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="elevator left outside-left bg-gray-500 border border-white z-2"
                ></motion.div>
                <motion.div 
                    animate={{ x: ['100%', '0%', '0%', '0%', '100%'] }}
                    transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut"}}
                    className='elevator right z-1 bg-gray-700 border border-white'></motion.div>
                <motion.div
                animate={{ x: ['100%', '0%', '0%', '0%', '0%', '0%', '100%'] }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="elevator right outside-right z-2 border border-white bg-gray-500"
                ></motion.div>
            </AnimatePresence> */}
        </div>
    )
  }