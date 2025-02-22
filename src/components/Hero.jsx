import HalfStar from "./HalfStar";
import Star from "./Star";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-mainShade relative z-0">
      {/* //////////// Heading //////////// */}
      <h1 className="text-mainTint text-[7.3rem] py-[7.5rem] leading-[8rem] tracking-tight font-semibold text-center ">
        Mortgages <br /> made simple
      </h1>
      <div className="grid grid-cols-2 pb-[19.5rem]">
        {/* //////////// Cta btn //////////// */}
        <div className="flex flex-col items-center">
          <button className="bg-mainTint hover:bg-mainShade hover:text-background transition-all ease-in-out duration-200 text-foreground font-semibold rounded-full px-12 py-5">
            Start my approval
          </button>
          <div className="flex gap-2 items-cente mt-3">
            <svg
              width="20"
              height="20"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 6H8.5V10.5H7.5V6ZM6.5 1.5H9.5V2.5H6.5V1.5Z"
                className="fill-background"
              ></path>
              <path
                className="fill-background"
                d="M13.9987 5.00055L13.2887 4.29555L12.1637 5.42055C11.2429 4.35706 9.94762 3.68926 8.54717 3.5559C7.14671 3.42254 5.74872 3.83386 4.64365 4.70442C3.53857 5.57497 2.81139 6.83782 2.61318 8.23057C2.41497 9.62333 2.76098 11.0389 3.57931 12.1832C4.39765 13.3275 5.62539 14.1125 7.00745 14.3751C8.3895 14.6377 9.81961 14.3578 11.0006 13.5934C12.1817 12.8291 13.0228 11.6391 13.3493 10.2707C13.6758 8.90233 13.4625 7.46077 12.7537 6.24554L13.9987 5.00055ZM7.99875 13.5005C7.10873 13.5005 6.2387 13.2366 5.49868 12.7422C4.75866 12.2477 4.18189 11.5449 3.84129 10.7226C3.5007 9.90035 3.41158 8.99555 3.58522 8.12264C3.75885 7.24972 4.18743 6.4479 4.81677 5.81856C5.44611 5.18923 6.24793 4.76064 7.12084 4.58701C7.99376 4.41338 8.89856 4.50249 9.72082 4.84309C10.5431 5.18368 11.2459 5.76046 11.7404 6.50048C12.2348 7.2405 12.4987 8.11053 12.4987 9.00055C12.4987 10.194 12.0246 11.3386 11.1807 12.1825C10.3368 13.0264 9.19222 13.5005 7.99875 13.5005Z"
              ></path>
            </svg>
            <p className="text-textLight2 text-sm">3 min | No credit impact</p>
          </div>
        </div>
        {/* //////////// Google ratings //////////// */}
        <div className="flex flex-col items-center">
          <div className="flex gap-2 items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_328_5133)">
                <path
                  d="M23.9998 12.2755C23.9998 11.4598 23.9324 10.6397 23.7884 9.83716H12.2405V14.4581H18.8534C18.579 15.9485 17.6973 17.2669 16.4062 18.1047V21.103H20.3515C22.6683 19.013 23.9998 15.9264 23.9998 12.2755Z"
                  fill="#4285F4"
                ></path>
                <path
                  d="M12.2394 24.0003C15.5414 24.0003 18.326 22.9377 20.3549 21.1034L16.4096 18.1051C15.3119 18.837 13.8949 19.2515 12.2439 19.2515C9.04991 19.2515 6.34175 17.1394 5.37006 14.2998H1.29883V17.3907C3.37718 21.4429 7.61036 24.0003 12.2394 24.0003Z"
                  fill="#34A853"
                ></path>
                <path
                  d="M5.36724 14.299C4.8544 12.8086 4.8544 11.1948 5.36724 9.70447V6.61353H1.30051C-0.435945 10.0043 -0.435945 13.9992 1.30051 17.3899L5.36724 14.299Z"
                  fill="#FBBC04"
                ></path>
                <path
                  d="M12.2394 4.74868C13.9849 4.72223 15.6718 5.36599 16.9359 6.54769L20.4314 3.12164C18.218 1.08453 15.2805 -0.0354426 12.2394 -0.000167897C7.61036 -0.000167897 3.37718 2.55725 1.29883 6.61383L5.36556 9.70477C6.33276 6.86075 9.04541 4.74868 12.2394 4.74868Z"
                  fill="#EA4335"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_328_5133">
                  <rect width="24" height="24" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
            <div className="flex">
              <Star />
              <Star />
              <Star />
              <Star />
              <HalfStar />
            </div>
          </div>
          <p className="text-textLight2 mt-1 text-xs">
            4.6 Stars | 3177 Google reviews
          </p>
        </div>
      </div>
      {/* //////////// Hero image //////////// */}
      <Image
        src="/heroimg.webp"
        alt="Hero image"
        width={510}
        height={667}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-[-1]"
      />
    </div>
  );
}
