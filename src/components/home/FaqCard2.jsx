import Image from "next/image";

export default function FaqCard2(props) {
  return (
    <div
      className={`bg-[#f0f7f1] rounded-lg px-12 py-9 col-span-2 flex gap-[2.5rem] ${
        props.inv === "true" && "flex-row-reverse"
      }`}
    >
      <div className="flex flex-col items-start gap-6">
        <h3 className="text-2xl font-semibold leading-tight tracking-tighter">
          {props.heading}
        </h3>
        <p className="text-sm text-textLight">{props.text}</p>
        <div className="p-3 rounded-full border-[1px] border-slate-500/50">
          <Image src="/images/rarr.svg" alt="rarr" width={22} height={22} />
        </div>
      </div>
      <Image src={props.img} alt="faq1" width={285} height={285} />
    </div>
  );
}
