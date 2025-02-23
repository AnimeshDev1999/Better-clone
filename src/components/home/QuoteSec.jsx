import Image from "next/image";
import QuoteShuffler from "./QuoteShuffler";

export default function QuoteSec() {
  return (
    <div className="flex justify-between items-center p-[10rem] max-w-screen-2xl">
      {/* //////////// Quote img //////////// */}
      <QuoteShuffler />
      {/* //////////// Sec text //////////// */}
      <div>
        <h2 className="text-[5.2rem] leading-[5.5rem] -tracking-[0.3rem] font-semibold mb-6">
          Find out why <br /> we’re better.
        </h2>
        <button className="px-12 py-5 bg-mainShade text-background font-semibold rounded-full hover:bg-[#017848] cust-anim">
          See all our stories
        </button>
        <div className="flex mt-3 items-baseline">
          <Image
            src="/images/greenstar.svg"
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
