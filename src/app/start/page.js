import AltNav from "@/components/start/AltNav";
import StartBtns from "@/components/start/StartBtns";
import Steps from "@/components/start/Steps";

export default function Start() {
  return (
    <>
      <AltNav />
      <div className="py-16">
        <h1 className="text-2xl lg:text-5xl leading-[2rem] tracking-[-0.1rem] lg:leading-[4rem] lg:tracking-[-0.2rem] font-semibold text-center">
          Hi, I&#39;m Betsy! <br /> What can I help you with?
        </h1>
        <StartBtns />
        {/* //////////// Stats //////////// */}
        <div className="flex max-w-[550px] px-10 lg:px-0 mx-auto mt-20 gap-8">
          <div className="flex justify-center items-center flex-col">
            <p className="text-3xl font-semibold">$100B</p>
            <p className="text-sm mt-3 text-center">
              home loans funded entirely online
            </p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <p className="text-3xl font-semibold">400K</p>
            <p className="text-sm mt-3 text-center">
              Customers who chose a Better Mortgage
            </p>
          </div>
        </div>
        <Steps />
      </div>
    </>
  );
}
