'use client'
import { motion, AnimatePresence } from 'framer-motion';

export default function Mask({ children }) {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className='out'>
            <AnimatePresence mode='popLayout'>
                {children}
            </AnimatePresence>
        </div>
    )
  }