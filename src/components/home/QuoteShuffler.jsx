"use client";
import Image from "next/image";
import { useState } from "react";

export default function QuoteShuffler() {
  const [quote, setQuote] = useState("1");
  return (
    <div className="flex flex-col-reverse lg:flex-col">
      <Image
        className="rounded-2xl"
        src={`/images/quote${quote}.webp`}
        alt="quote"
        width={340}
        height={600}
      />
      <div className="flex gap-4 mt-6 mb-5 lg:mb-0">
        <button
          className={`shuffle-btn ${quote === "1" ? "shuffle-act" : ""}`}
          onClick={() => {
            setQuote("1");
          }}
        >
          Arian
        </button>
        <button
          className={`shuffle-btn ${quote === "2" ? "shuffle-act" : ""}`}
          onClick={() => {
            setQuote("2");
          }}
        >
          Amanda
        </button>
        <button
          className={`shuffle-btn ${quote === "3" ? "shuffle-act" : ""}`}
          onClick={() => {
            setQuote("3");
          }}
        >
          Paul
        </button>
      </div>
    </div>
  );
}
