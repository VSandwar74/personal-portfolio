import Link from "next/link";
import { SocialIcon } from 'react-social-icons';


export default function Footer() {
    return (
        <>
            <div className="bg-black rounded-full fixed left-0 top-[50%] transform -translate-y-1/2 flex flex-col items-center justify-center">
                <SocialIcon url='https://twitter.com/VishakhS74' bgColor='000000' fgColor='#FFFFFF' />
                {"   "}
                <SocialIcon url='https://github.com/VSandwar74' bgColor='000000' fgColor='#FFFFFF' />
                {"   "}
                <SocialIcon url='https://www.linkedin.com/in/vishakhs/' bgColor='000000' fgColor='#FFFFFF' />
                {"   "}
                <SocialIcon url='mailto:vishakh.sandwar@nyu.edu' bgColor='000000' fgColor='#FFFFFF' />
            </div>
        </>
        // <Link href="/">
        //     <div className='text-white fixed -left-10 top-[50%] -rotate-90'>
        //         {/* <p className=' tracking-tighter'>Vishakh Sandwar</p> */}
        //         <Image
        //             src={"/../public/sig.png"}
        //             height={30}
        //             width={150}
        //             alt="Vishakh's Signature"
        //         />
        //     </div>
        // </Link>
    )
}