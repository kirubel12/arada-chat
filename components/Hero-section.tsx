import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="flex ">
      <div>
        <h1 className="w-[736px] ml-[100px] mt-[30px] text-zinc-900 text-[46px] font-extrabold">
          Connect With Your Community In Real Time
        </h1>
        <p className="w-[650px] ml-[100px] mt-[27px] text-zinc-900 text-[26px] font-normal">
          Our advanced chat app makes it easy to communicate, collaborate, and
          stay in touch with the people who matter most
        </p>
        <Link href={"/sign-in"}>
          <div className="w-[175px] mt-[30px] ml-[100px] h-11 p-2.5 bg-sky-500 rounded-[10px] justify-center items-center gap-2.5 inline-flex">
            <p className="text-white text-base">Get started for free</p>
          </div>
        </Link>
      </div>
      <div className="mr-[140px]">
        <Image
                  src="/people.svg" alt="people" height={800} width={800}
                    />
      </div>
    </div>
  );
}
