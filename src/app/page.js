import Divider from "@/components/Divider";
import FaqSec from "@/components/FaqSec";
import Hero from "@/components/Hero";
import QuoteSec from "@/components/QuoteSec";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <QuoteSec />
      <FaqSec />
      <Divider />
    </>
  );
}
