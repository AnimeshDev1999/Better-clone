import FooterCard from "./FooterCard";
import {
  footerData,
  footerData2,
  footerData3,
  footerData4,
  footerData5,
} from "@/app/_lib/siteData";
import { lowerFootData, lowerFootData2 } from "@/app/_lib/siteData2";
import Divider from "./Divider";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="lg:px-40 px-[1.5rem] py-6">
      {/* //////////// Logo //////////// */}
      <Image src="/icons/logogreen.svg" alt="logo" width={85} height={35} />
      {/* //////////// Footer grid //////////// */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 py-8 mb-[11rem]">
        {/* //////////// column 1 //////////// */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <p className="text-textLight">
            Better is a family of companies serving all your homeownership
            needs.
          </p>
          {footerData.map((item) => (
            <FooterCard key={item.name} name={item.name} text={item.text} />
          ))}
        </div>
        {/* //////////// column 2 //////////// */}
        <div className="flex flex-col gap-4">
          <p className="text-lg font-bold mb-2">Resources</p>
          {footerData2.map((item) => (
            <p key={item} className="text-textLight">
              {item}
            </p>
          ))}
        </div>
        {/* //////////// column 3 //////////// */}
        <div className="flex flex-col gap-4">
          <p className="text-lg font-bold mb-2">Company</p>
          {footerData3.map((item) => (
            <p key={item} className="text-textLight">
              {item}
            </p>
          ))}
        </div>
        {/* //////////// column 4 //////////// */}
        <div className="flex flex-col gap-4">
          <p className="text-lg font-bold mb-2">Contact Us</p>
          {footerData4.map((item) => (
            <p key={item} className="text-textLight">
              {item}
            </p>
          ))}
          <p className="text-lg font-bold my-2">Legal</p>
          {footerData5.map((item) => (
            <p key={item} className="text-textLight">
              {item}
            </p>
          ))}
          <div className="flex gap-4 mt-2">
            <Image
              src="/icons/property.svg"
              alt="property"
              width={41}
              height={40}
            />
            <Image
              src="/icons/property2.svg"
              alt="property"
              width={43}
              height={40}
            />
          </div>
        </div>
      </div>
      {/* //////////// Lower footer //////////// */}
      <div className="flex gap-4">
        <Image
          src="/icons/facebook.svg"
          alt="facebook"
          width={24}
          height={24}
        />
        <Image
          src="/icons/instagram.svg"
          alt="instagram"
          width={24}
          height={24}
        />
        <Image
          src="/icons/linkedin.svg"
          alt="linkedin"
          width={24}
          height={24}
        />
      </div>
      <div className="mt-[2.5rem] flex flex-col gap-3">
        {lowerFootData.map((item, index) => (
          <p key={index} className="text-xs text-textLight">
            {item}
          </p>
        ))}
      </div>
      <Divider />
      <div className="mt-[2.5rem] flex flex-col gap-4">
        {lowerFootData2.map((item, index) => (
          <p key={index} className="text-xs text-textLight">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
