import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-mainShade relative z-0">
      {/* //////////// Heading //////////// */}
      <h1 className="text-mainTint text-[3rem] md:text-[7.3rem] py-[1.8rem] md:py-[7.5rem] leading-[3.5rem] md:leading-[8rem] tracking-tight font-semibold text-center ">
        Mortgages <br /> made simple
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[12rem] md:gap-0 pb-[19.5rem]">
        {/* //////////// Cta btn //////////// */}
        <div className="flex flex-col items-center">
          <button className="bg-mainTint hover:bg-mainShade hover:text-background transition-all ease-in-out duration-200 text-foreground font-semibold rounded-full px-12 py-5">
            Start my approval
          </button>
          <div className="flex gap-1 items-cente mt-3">
            <Image
              src="/icons/stopwatch.svg"
              alt="watch"
              width={20}
              height={20}
            />
            <p className="text-textLight2 text-sm">3 min | No credit impact</p>
          </div>
        </div>
        {/* //////////// Google ratings //////////// */}
        <div className="flex flex-col opacity-0 md:opacity-100 items-center">
          <div className="flex gap-2 items-center">
            <Image
              src="/icons/google.svg"
              alt="google"
              width={24}
              height={24}
            />
            <div className="flex">
              <Image src="/icons/star.svg" alt="star" width={25} height={25} />
              <Image src="/icons/star.svg" alt="star" width={25} height={25} />
              <Image src="/icons/star.svg" alt="star" width={25} height={25} />
              <Image src="/icons/star.svg" alt="star" width={25} height={25} />
              <Image
                src="/icons/starhalf.svg"
                alt="starhalf"
                width={25}
                height={25}
              />
            </div>
          </div>
          <p className="text-textLight2 mt-1 text-xs">
            4.6 Stars | 3177 Google reviews
          </p>
        </div>
      </div>
      {/* //////////// Hero image //////////// */}
      <Image
        src="/images/heroimg.webp"
        alt="Hero image"
        width={510}
        height={667}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-[-1]"
      />
      <div className="flex flex-col md:opacity-0 bg-[#073126] w-fit p-2 rounded-md absolute bottom-8 left-1/2 -translate-x-1/2 opacity-100 items-center">
        <div className="flex gap-2 items-center">
          <Image src="/icons/google.svg" alt="google" width={24} height={24} />
          <div className="flex">
            <Image src="/icons/star.svg" alt="star" width={25} height={25} />
            <Image src="/icons/star.svg" alt="star" width={25} height={25} />
            <Image src="/icons/star.svg" alt="star" width={25} height={25} />
            <Image src="/icons/star.svg" alt="star" width={25} height={25} />
            <Image
              src="/icons/starhalf.svg"
              alt="starhalf"
              width={25}
              height={25}
            />
          </div>
        </div>
        <p className="text-textLight2 mt-1 text-xs">
          4.6 Stars | 3177 Google reviews
        </p>
      </div>
    </div>
  );
}
