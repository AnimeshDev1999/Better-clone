export default function MortgageCalc() {
  return (
    <div className="py-16 px-10 md:px-24 bg-mainTint3">
      <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.1rem] md:tracking-[-0.2rem]">
        Mortgage Calculator
      </h2>
      <p className="my-6 pb-4">
        Our mortgage calculator includes key factors like homeowners association
        fees, property taxes, and private mortgage insurance (PMI). Get the
        whole picture and calculate your total monthly payment.
      </p>
      {/* //////////// Price display //////////// */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-14 mb-6">
        <div className="col-span-1 md:col-span-2">
          <p className="font-semibold mb-4">Home price</p>
          <input
            type="text"
            placeholder={"$50,000"}
            className="text-[1.8rem] md:text-[2.8rem] font-semibold px-3 py-1 max-w-[150px] md:max-w-[290px] border-[1px] border-slate-500/50 rounded-md"
          />
        </div>
        <div className="col-span-1 md:col-span-2">
          <p className="font-semibold mb-4">Monthly payment</p>
          <p
            type="text"
            placeholder={"$50,000"}
            className="text-[1.8rem] md:text-[2.8rem] font-semibold px-3 py-1 max-w-[150px] md:max-w-[290px]"
          >
            $880/mo
          </p>
        </div>
        <div className="md:flex items-end hidden">
          <button className="font-semibold w-full text-background rounded-lg bg-mainTint2 h-fit py-5">
            Get pre-approved
          </button>
        </div>
      </div>
      {/* //////////// Slider and range //////////// */}
      <input
        type="range"
        className="w-full h-1 rounded-full outline-none cursor-pointer accent-[#292B29] m-6"
      />
      <div className="md:hidden items-end">
        <button className="font-semibold w-full text-background rounded-lg bg-mainTint2 h-fit py-5">
          Get pre-approved
        </button>
      </div>
      <div className="md:hidden items-end mt-5">
        <button className="font-semibold w-full border-2 border-slate-500/50 rounded-lg text-foreground h-fit py-5">
          Get pre-approved
        </button>
      </div>
      <div className="gap-[7.5rem] mt-6 mb-4 hidden md:flex">
        {/* //////////// left column //////////// */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-background p-3 border-[1px] border-slate-500/50 rounded-md">
            <p className="text-xs text-textLight ">ZIP code</p>
            <input
              type="text"
              className="font-semibold"
              placeholder={"250002"}
            />
          </div>
          <div className="bg-background border-[1px] flex items-center border-slate-500/50 rounded-md">
            <div className="p-3">
              <p className="text-xs text-textLight">Down payment</p>
              <input
                type="text"
                className="font-semibold"
                placeholder={"$ 10,000"}
              />
            </div>
            <div className="px-3 h-full border-l-[1px] border-slate-500/50 flex justify-center items-center">
              <p className="font-semibold">20%</p>
            </div>
          </div>
        </div>
        {/* //////////// Right column //////////// */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-background border-[1px] flex items-center border-slate-500/50 rounded-md">
            <div className="p-3">
              <p className="text-xs text-textLight">Interest rate</p>
              <input
                type="text"
                className="font-semibold"
                placeholder={"6.500"}
              />
            </div>
            <div className="px-3 h-full flex justify-center items-center">
              <p className="font-semibold">%</p>
            </div>
          </div>
          <div className="bg-background border-[1px] border-slate-500/50 rounded-md">
            <div className="p-3">
              <p className="text-xs text-textLight">Length of loan</p>
              <select className="w-[100%] font-semibold">
                <option value="1">30 years</option>
                <option value="2">20 years</option>
                <option value="3">15 years</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
