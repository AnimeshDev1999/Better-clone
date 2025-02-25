import Image from "next/image";

export default function Steps() {
  return (
    <div className="flex flex-col items-center rounded-lg gap-4 py-4 mt-20 bg-[#F0F7F1] max-w-[550px] mx-10 md:mx-auto">
      <p>After a few questions, you&#39;ll unlock:</p>
      <div className="grid grid-cols-4 gap-4">
        {/* //////////// line 1 //////////// */}
        <div className="h-5 flex justify-end pr-2">
          <Image src="/icons/note1.svg" alt="note1" width={22} height={22} />
        </div>
        <p className="col-span-3">Custom mortgage rates</p>
        {/* //////////// line 2 //////////// */}
        <div className="h-5 flex justify-end pr-2">
          <Image src="/icons/note2.svg" alt="note2" width={24} height={24} />
        </div>
        <p className="col-span-3">Exclusive offers</p>
        {/* //////////// line 3 //////////// */}
        <div className="h-5 flex justify-end pr-2">
          <Image src="/icons/note3.svg" alt="note3" width={24} height={24} />
        </div>
        <p className="col-span-3">A personalized dashboard</p>
      </div>
    </div>
  );
}
