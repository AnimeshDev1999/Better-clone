import Image from "next/image";

export default function FaqCard(props) {
  return (
    <div className="bg-[#f0f7f1] rounded-lg px-12 py-9 flex flex-col items-start gap-6">
      <h3 className="text-2xl font-semibold leading-tight tracking-tighter">
        {props.heading}
      </h3>
      <div className="p-3 rounded-full border-[1px] border-slate-500/50">
        <Image src="/icons/rarr.svg" alt="rarr" width={22} height={22} />
      </div>
      <Image src={props.img} alt="faq1" width={500} height={500} />
    </div>
  );
}
