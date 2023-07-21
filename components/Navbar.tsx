import Image from "next/image"
import Link from "next/link"
export default function Navbar() {
    return(
        <nav className="flex justify-between items-center ml-[100px] mr-[100px] mt-[20px]">
            <Image src="/logo.svg" alt="logo" width={128} height={77} />
            <Link href={"/sign-in"}>
                <div className="w-[209px] h-11 p-2.5 bg-sky-500 rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                    <Image src="/google.svg" alt="sign-in" width={24} height={24} />
                    <p className="text-white font-400">Sign In with google</p>
                </div>
            </Link>
        </nav>
    )
}