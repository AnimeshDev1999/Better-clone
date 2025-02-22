import AbtMain from "@/components/AbtMain";
import { Partners } from "@/components/Partners";
import Timeline from "@/components/Timeline";

export default function About() {
  return (
    <>
      <AbtMain />
      {/* //////////// How section //////////// */}
      <div className="bg-[#017848] text-background px-[15rem] py-[5rem]">
        <h2 className="text-5xl mx-auto font-semibold leading-[3.8rem] -tracking-[0.2rem] mb-8">
          How we&#39;re changing things
        </h2>
        <p className="mb-4">
          Homeownership is a huge part of our economy. Housing overall is a $33
          trillion business, and mortgages account for $15 trillion. Yet home
          finance operates in the same way it has for decades — through opaque
          systems and expensive intermediaries whose interests are misaligned
          with consumers.
        </p>
        <p>
          That&#39;s why Better.com is redefining the homeownership process from
          the ground up. We&#39;re using technology to make it faster and more
          efficient, and humans to help make it friendly and enjoyable.
        </p>
      </div>
      {/* //////////// Partners //////////// */}
      <Partners />
      {/* //////////// Timeline //////////// */}
      <Timeline />
    </>
  );
}
