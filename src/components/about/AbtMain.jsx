import Image from "next/image";

export default function AbtMain() {
  return (
    <div className="lg:px-[15rem] py-[8rem]">
      <div className="mb-[15rem]">
        <h1 className="text-center text-2xl lg:text-3xl font-semibold text-[#017848] mb-8">
          Our mission
        </h1>
        <h2 className="text-center text-3xl lg:text-5xl mx-auto font-semibold leading-[2.5rem] -tracking-[0rem] lg:leading-[3.2rem] lg:-tracking-[-0.1rem]">
          We&#39;re making homeownership simpler, faster — and most importantly,
          more accessible for all Americans.
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 px-5 lg:px-0 gap-[8rem]">
        <div className="order-2 lg:order-1">
          <h3 className="mb-6 text-3xl font-semibold">
            The status quo is broken
          </h3>
          <p className="text-textLight mb-8">
            The traditional processes around homeownership are opaque and
            stressful. Fees aren&#39;t transparent and some are simply
            outrageous in size. Traditional mortgage lending is rife with
            unnecessary fees and slow, painful processes. It&#39;s a system set
            up to benefit insiders — not you. Better.com CEO, Vishal Garg, set
            out to change that.
          </p>
          <button className="px-10 py-5 text-background font-semibold bg-[#017848] hover:bg-mainShade rounded-lg cust-anim">
            Read Vishal&#39;s story
          </button>
        </div>
        <div className="relative order-1 lg:order-2">
          <Image
            src="/images/mission.jpg"
            alt="mission"
            width={400}
            height={400}
          />
          <Image
            src="/icons/playbtn.svg"
            alt="play"
            width={100}
            height={100}
            className="absolute right-1/2 top-1/2 translate-x-1/4 -translate-y-1/2"
          />
        </div>
      </div>
    </div>
  );
}
