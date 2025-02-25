import Image from "next/image";
import Link from "next/link";

export default function MobNav(props) {
  return (
    <div
      className={`absolute text-foreground cust-anim top-0 w-screen h-screen bg-background z-[100] p-6 ${
        props.active ? "left-0" : "left-[-100%]"
      }`}
    >
      <div className="flex justify-between px-2">
        <Link onClick={() => props.func(!props.active)} href="/">
          <Image src="/icons/logoblack.svg" alt="logo" width={85} height={35} />
        </Link>
        <button onClick={() => props.func(!props.active)}>
          <Image src="/icons/close.svg" alt="close" width={32} height={32} />
        </button>
      </div>
      <div className="flex flex-col py-5 gap-8 px-2">
        <Link onClick={() => props.func(!props.active)} href="/about">
          About
        </Link>
        <Link onClick={() => props.func(!props.active)} href="/start">
          Get Started
        </Link>
        <Link onClick={() => props.func(!props.active)} href="/calc">
          Mortgage Calc
        </Link>
        <Link onClick={() => props.func(!props.active)} href="/calc">
          Rates
        </Link>
        <Link onClick={() => props.func(!props.active)} href="/calc">
          Better+
        </Link>
      </div>
      <div className="flex gap-4 justify-center items-center bg-mainTint3 py-3 rounded-full">
        <Image src="/icons/callblack.svg" alt="phone" width={19} height={19} />
        <p>Call us anytime at (415) 523 88371</p>
      </div>
    </div>
  );
}
