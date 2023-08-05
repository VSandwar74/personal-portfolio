"use client"
import Link from "next/link";
import Image from "next/image";
import { SocialIcon } from 'react-social-icons';

export default function Signature() {
    return (    
        <Link href="/">
            <footer className="fixed bottom-0 left-0 right-0 flex flex-row items-center justify-center ">
                <Image
                    src={"/signature.png"}
                    height={75}
                    width={150}
                    alt="Vishakh's Signature"
                />
            </footer>
        </Link>
    )
}