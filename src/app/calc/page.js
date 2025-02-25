import HowSec from "@/components/calc/HowSec";
import MortgageCalc from "@/components/calc/MortgageCalc";
import PaymentBreakdown from "@/components/calc/PaymentBreakdown";

export default function Calc() {
  return (
    <>
      <MortgageCalc />
      <PaymentBreakdown />
      <HowSec />
    </>
  );
}
