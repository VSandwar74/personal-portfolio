import Link from "next/link";

export default function Signature() {
    return (
        <Link href="/">
            <div className='text-white fixed -left-10 top-[50%]'>
                <p className='-rotate-90 tracking-tighter'>Vishakh Sandwar</p>
            </div>
        </Link>
    )
}