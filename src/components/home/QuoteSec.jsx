import Image from "next/image";
import QuoteShuffler from "./QuoteShuffler";

export default function QuoteSec() {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between items-center py-[5rem] px-[1.5rem] lg:p-[10rem] max-w-screen-2xl">
      {/* //////////// Quote img //////////// */}
      <QuoteShuffler />
      {/* //////////// Sec text //////////// */}
      <div>
        <h2 className="text-[3rem] lg:text-[5.2rem] leading-[3rem] -tracking-[0.1rem] lg:leading-[5.2rem] lg:-tracking-[0.2rem] font-semibold mb-6">
          Find out why <br /> we&#39;re better.
        </h2>
        <button className="px-12 py-5 w-[100%] lg:w-fit bg-mainShade text-background font-semibold rounded-full hover:bg-[#017848] cust-anim">
          See all our stories
        </button>
        <div className="flex mt-3 items-baseline">
          <Image
            src="/icons/greenstar.svg"
            alt="quote"
            width={20}
            height={20}
          />
          &nbsp;
          <p className="font-semibold">Trustpilot</p>&nbsp;&nbsp;
          <p className="font-semibold text-textLight">Excellent</p>&nbsp;&nbsp;
          <p>
            <span className="font-semibold">4.4</span> out of 5
          </p>
        </div>
      </div>
    </div>
  );
}
