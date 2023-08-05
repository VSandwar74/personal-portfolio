"use client"
import Link from "next/link";
import Image from "next/image";
import { SocialIcon } from 'react-social-icons';

export default function Signature() {
    return (    
        <Link href="/">
            <footer className="fixed bottom-0 left-0 right-0 flex flex-row items-center justify-center ">
                <Image
                    src={"/../public/signature.png"}
                    height={75}
                    width={150}
                    alt="Vishakh's Signature"
                    // className="bg-blue-500"
                />
            </footer>
            {/* <footer className="bg-white absolute bottom-0 flex flex-row w-[50%] justify-center text-white h-10 text-begin"> */}
            {/* <div className='text-white fixed -left-10 top-[50%] -rotate-90'> */}
                {/* <p className=' tracking-tighter'>Vishakh Sandwar</p> */}
                {/* <Image
                    src={"/../public/sig.png"}
                    height={50}
                    width={150}
                    alt="Vishakh's Signature" */}
                {/* /> */}
            {/* </div> */}
            {/* </footer> */}
        </Link>
        // <footer className="absolute bottom-0 flex flex-row w-[50%] justify-center text-white h-10 text-center">
        //     <SocialIcon url='https://twitter.com/VishakhS74' bgColor='000000' fgColor='#FFFFFF' />
        //     {"   "}
        //     <SocialIcon url='https://github.com/VSandwar74' bgColor='000000' fgColor='#FFFFFF' />
        //     {"   "}
        //     <SocialIcon url='https://www.linkedin.com/in/vishakhs/' bgColor='000000' fgColor='#FFFFFF' />
        //     {"   "}
        //     <SocialIcon url='vishakh.sandwar@nyu.edu' bgColor='000000' fgColor='#FFFFFF' />
        // </footer>
    )
}