import Utility from "./Utility";

export default function PaymentBreakdown() {
  return (
    <div className="mt-20 px-10 lg:px-24 grid grid-cols-1 lg:grid-cols-2">
      {/* //////////// Column 1 //////////// */}
      <div>
        <h2 className="text-lg font-semibold mb-6">
          Monthly payment breakdown
        </h2>
        <p className="text-5xl font-semibold">$2,146/mo</p>
        <div className="flex h-20 lg:w-[80%] my-[4rem]">
          <div className="graph bg-[#017848] w-[70%] h-[100%]"></div>
          <div className="graph bg-[#6E4CF6] w-[13%] h-[100%]"></div>
          <div className="graph bg-[#8E8EEB] w-[6%] h-[100%]"></div>
          <div className="graph bg-[#FFD566] w-[6%] h-[100%]"></div>
          <div className="graph bg-[#FE8B72] w-[5%] h-[100%]"></div>
        </div>
        <div className="p-6 shadow-lg rounded-lg opacity-0">
          <p className="font-semibold mb-6">Utilities</p>
          <p>Includes things like water, gas, electricity, and internet.</p>
        </div>
      </div>
      {/* //////////// Column 2 //////////// */}
      <div className="grid grid-cols-2 gap-5">
        {/* //////////// Row 1 //////////// */}
        <p className="border-l-[5px] border-l-[#017848] h-fit pl-2">
          Principal & interest
        </p>
        <p className="justify-self-end font-semibold min-w-[150px] h-[58px]">
          $1,517
        </p>
        {/* //////////// Row 2 //////////// */}
        <p className="border-l-[5px] border-l-[#6E4CF6] h-fit pl-2">
          Property taxes
        </p>
        <div className="bg-background max-w-[150px] border-[1px] justify-self-end flex items-center border-slate-500/50 rounded-md">
          <div className="px-3 flex justify-center items-center">
            <p className="font-semibold">$</p>
          </div>
          <div className="p-3">
            <input
              type="text"
              className="font-semibold w-[80px] text-right"
              placeholder={"265"}
            />
          </div>
        </div>
        {/* //////////// Row 3 //////////// */}
        <p className="border-l-[5px] border-l-[#8E8EEB] h-fit pl-2">
          Homeowners insurance
        </p>
        <div className="bg-background border-[1px] justify-self-end max-w-[150px] flex items-center border-slate-500/50 rounded-md">
          <div className="px-3 flex justify-center items-center">
            <p className="font-semibold">$</p>
          </div>
          <div className="p-3">
            <input
              type="text"
              className="font-semibold w-[80px] text-right"
              placeholder={"265"}
            />
          </div>
        </div>
        {/* //////////// Row 4 //////////// */}
        <p className="border-l-[5px] border-l-[#FFD566] h-fit pl-2">HOA fees</p>
        <div className="bg-background border-[1px] flex justify-self-end max-w-[150px] items-center border-slate-500/50 rounded-md">
          <div className="px-3 flex justify-center items-center">
            <p className="font-semibold">$</p>
          </div>
          <div className="p-3">
            <input
              type="text"
              className="font-semibold w-[80px] text-right"
              placeholder={"265"}
            />
          </div>
        </div>
        {/* //////////// Row 5 //////////// */}
        <Utility />
        {/* //////////// Row 6 //////////// */}
        <button className="w-full lg:w-fit col-span-2 lg:col-span-1 px-10 py-4 bg-[#E0E1DD] font-semibold rounded-lg">
          Copy estimate link
        </button>
      </div>
    </div>
  );
}
