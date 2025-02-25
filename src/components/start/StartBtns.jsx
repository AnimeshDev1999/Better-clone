import Image from "next/image";

export default function StartBtns() {
  return (
    <div className="max-w-[550px] mx-auto px-10 lg:px-0 flex flex-col gap-6 mt-4">
      {/* //////////// Bttn 1 //////////// */}
      <button className="start-btn">
        <Image src="/icons/start1.svg" alt="start1" width={36} height={36} />
        <p>Buying a home</p>
      </button>
      {/* //////////// Btn 2 //////////// */}
      <button className="start-btn">
        <Image src="/icons/start2.svg" alt="start2" width={36} height={36} />
        <p>Refinance my mortgage</p>
      </button>
      {/* //////////// Btn 3 //////////// */}
      <button className="start-btn">
        <Image src="/icons/start3.svg" alt="start3" width={36} height={36} />
        <p>Get cash from my home</p>
      </button>
    </div>
  );
}
