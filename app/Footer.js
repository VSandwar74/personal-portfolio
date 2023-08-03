"use client"
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
    return (
        <footer className="absolute bottom-0 flex flex-row w-[50%] justify-center text-white h-10 text-center">
            <SocialIcon url='https://twitter.com/VishakhS74' bgColor='000000' fgColor='#FFFFFF' />
            {"   "}
            <SocialIcon url='https://github.com/VSandwar74' bgColor='000000' fgColor='#FFFFFF' />
            {"   "}
            <SocialIcon url='https://www.linkedin.com/in/vishakhs/' bgColor='000000' fgColor='#FFFFFF' />
            {"   "}
            <SocialIcon url='vishakh.sandwar@nyu.edu' bgColor='000000' fgColor='#FFFFFF' />
        </footer>
    )
}