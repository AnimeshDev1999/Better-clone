import Image from "next/image";

export default function FooterCard(props) {
  return (
    <div className="">
      <div className="flex items-center gap-1 mb-3">
        <Image src="/icons/logogreen.svg" alt="logo" width={55} height={18} />
        <p className="text-[#a7aba7] text-xl">{props.name}</p>
      </div>
      <p className="text-sm text-[#292b29]">{props.text}</p>
    </div>
  );
}
