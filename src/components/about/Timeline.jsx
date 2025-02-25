import { timelineData } from "@/app/_lib/siteData2";

export default function Timeline() {
  const invIndex = [3, 7, 11, 15, 18, 21];
  return (
    <div>
      <h2 className="text-3xl mx-auto font-semibold leading-[3.8rem] text-center -tracking-[0.1rem] mb-16">
        Company timeline
      </h2>
      {/* //////////// Timeline //////////// */}
      <div className="flex flex-col justify-center relative items-center helperOne z-0">
        {timelineData.map((item, index) =>
          item.type === "date" ? (
            <p
              key={index}
              className="text-2xl font-semibold px-8 py-2 bg-mainTint2 text-background rounded-full"
            >
              {item.content}
            </p>
          ) : (
            <p
              key={index}
              className={`p-10 my-6 bg-[#DFE0DC] max-w-[150px] lg:max-w-[400px] rounded-md ${
                invIndex.includes(index) === true
                  ? "translate-x-[55%]"
                  : "-translate-x-[55%]"
              }`}
            >
              {item.content}
            </p>
          )
        )}
      </div>
    </div>
  );
}
