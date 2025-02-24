import Image from "next/image";

export const Partners = () => {
  return (
    <div className="px-[5rem] py-[5rem]">
      <h2 className="text-3xl mx-auto font-semibold leading-[3.8rem] text-center -tracking-[0.1rem] mb-[5rem]">
        Backed by
      </h2>
      <div className="flex justify-around">
        {/* //////////// logo 1 //////////// */}
        <Image src="/icons/client1.svg" alt="client1" width={154} height={90} />
        {/* //////////// logo 2 //////////// */}
        <Image src="/icons/client2.svg" alt="client2" width={154} height={90} />
        {/* //////////// logo 3 //////////// */}
        <Image src="/icons/client3.svg" alt="3" width={154} height={90} />
        {/* //////////// logo 4 //////////// */}
        <Image src="/icons/client4.svg" alt="client4" width={154} height={90} />
        {/* //////////// logo 5 //////////// */}
        <Image src="/icons/client5.svg" alt="client5" width={154} height={90} />
        {/* //////////// logo 6 //////////// */}
        <Image src="/icons/client6.svg" alt="client6" width={154} height={90} />
        {/* //////////// logo 7 //////////// */}
        <Image src="/icons/client7.svg" alt="client7" width={154} height={90} />
      </div>
    </div>
  );
};
