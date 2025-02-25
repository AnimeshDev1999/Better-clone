import Image from "next/image";

export default function MoreCard(props) {
  return (
    <div className="px-10 py-6 border-[1px] border-slate-500/50 rounded-md">
      <Image
        src={props.img}
        alt="more"
        width={32}
        height={32}
        className="mb-4"
      />
      <p className="text-xl mb-4">{props.heading}</p>
      <button className="text-mainTint2 font-semibold">
        {props.btn} &rarr;
      </button>
    </div>
  );
}
