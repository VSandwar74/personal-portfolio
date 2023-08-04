import Link from "next/link";
import Image from "next/image";

export default function Signature() {
    return (
        <Link href="/">
            <div className='text-white fixed -left-10 top-[50%] -rotate-90'>
                {/* <p className=' tracking-tighter'>Vishakh Sandwar</p> */}
                <Image
                    src={"/../public/sig.png"}
                    height={30}
                    width={150}
                    alt="Vishakh's Signature"
                />
            </div>
        </Link>
    )
}